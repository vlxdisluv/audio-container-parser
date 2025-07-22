import {AudioReader, IAudioMetadata} from "./audio-reader.base";
import {AudioFrame} from "@livekit/rtc-node";
import {createReadStream, promises as fsPromises} from "fs";
import {OpusDecoder} from "opus-decoder";


export class OggReader extends AudioReader{
    FRAME_DURATION_MS = 1000;

    public async *streamFrames(): AsyncIterable<AudioFrame> {
        const { sampleRate, channels, bytesPerSample, dataOffset } = await this.getMetadata();
console.log({ sampleRate, channels, bytesPerSample, dataOffset });

console.log('channels', channels)
        const decoder = new OpusDecoder({
            channels: channels,
            sampleRate: sampleRate as 48000,
        });

        await decoder.ready;

        console.log('decoder', decoder)

        const samplesPerFrame = (sampleRate * this.FRAME_DURATION_MS) / 1000;
        const frameSizeBytes = samplesPerFrame * channels * bytesPerSample;

        console.log('samplesPerFrame', samplesPerFrame)
        console.log('frameSizeBytes', frameSizeBytes);

        // Создаем поток чтения данных после заголовка
        const opusStream = createReadStream(this.filePath);
        let bufferAccumulator = Buffer.alloc(0);        // хранит «хвост» из непроцессированных байт
        let continuationBuffer = Buffer.alloc(0);

        for await (const chunk of opusStream) {
            bufferAccumulator = Buffer.concat([bufferAccumulator, chunk]);

            // пока в аккумуляторе есть хотя бы минимальный заголовок
            while (bufferAccumulator.length >= 27) {
                // а) проверяем сигнатуру
                if (bufferAccumulator.toString('ascii', 0, 4) !== 'OggS') {
                    const idx = bufferAccumulator.indexOf('OggS');
                    if (idx < 0) { bufferAccumulator = Buffer.alloc(0); break; }
                    bufferAccumulator = bufferAccumulator.slice(idx);
                }

                // б) сколько сегментов
                const segmentCount = bufferAccumulator.readUInt8(26);
                const headerSize   = 27 + segmentCount;
                if (bufferAccumulator.length < headerSize) break; // ждём доп. байты

                // в) сегментная таблица и длина данных
                const segmentTable = bufferAccumulator.slice(27, headerSize);
                const dataSize     = Array.from(segmentTable).reduce((s, v) => s + v, 0);
                const pageSize     = headerSize + dataSize;
                if (bufferAccumulator.length < pageSize) break;   // ждём доп. байты

                // г) извлекаем полную страницу и обрезаем аккумулятор
                const pageBuf = bufferAccumulator.slice(0, pageSize);
                bufferAccumulator = bufferAccumulator.slice(pageSize);

                // д) флаг «продолжение пакета»
                const headerType = pageBuf.readUInt8(5);
                let isContinued  = Boolean(headerType & 0x01);

                // е) payload сразу после заголовка
                const payload = pageBuf.slice(headerSize);

                // ж) разбираем лейсы на отдельные пакеты
                let offset   = 0;
                let fragBufs = [];  // части собираемого пакета
                for (let i = 0; i < segmentCount; i++) {
                    const lace = segmentTable[i];
                    const seg  = payload.slice(offset, offset + lace);
                    offset += lace;

                    if (isContinued && fragBufs.length === 0) {
                        // первый пакет страницы дополняем тем, что осталось
                        fragBufs.push(Buffer.concat([continuationBuffer, seg]));
                        continuationBuffer = Buffer.alloc(0);
                    } else {
                        fragBufs.push(seg);
                    }

                    if (lace < 255) {
                        // конец пакета
                        const opusPacket = Buffer.concat(fragBufs);

                        console.log('opusPacket', opusPacket);


                        // 1) Распаковали float‑данные
                        const { channelData, samplesDecoded, sampleRate } = decoder.decodeFrame(opusPacket);

                        // 2) Сверили количество каналов
                        const channels = channelData.length;

                        // 3) Интерливим + конвертим во 16‑бит целые
                        const pcmView = float32ToInt16Interleaved(channelData, samplesDecoded);

                        // 4) Обёртываем в Buffer
                        // const pcmBuffer = Buffer.from(pcmView.buffer);

                        // 5) Шлём в LiveKit
                        yield new AudioFrame(
                            pcmView,      // Buffer с Int16-PCM
                            sampleRate,     // 48000
                            channels,       // 1 или 2
                            samplesDecoded  // 960
                        );

                        // const { channelData, samplesDecoded, sampleRate } = decoder.decodeFrame(opusPacket);
                        // const pcmView = float32ToInt16Interleaved(channelData, samplesDecoded);


                        // yield new AudioFrame(pcmView, sampleRate, channels, samplesDecoded);
                        // console.log({channelData: channelData.length, samplesDecoded, sampleRate});
                        // handleOpusPacket(opusPacket);  // <-- здесь «отдаём» сырую пачку байт
                        fragBufs = [];
                        isContinued = false;           // далее уже не продолжаем из прошлого
                    }
                }

                // з) если последний сегмент = 255, пакет продолжается на следующей странице
                if (segmentTable[segmentCount - 1] === 255) {
                    continuationBuffer = Buffer.concat(fragBufs);
                }
            }
        }

            //
            // const arr = new Int16Array(Buffer.alloc(0));
            // yield new AudioFrame(arr, 16000, 1, 16000);
    }


    public async getMetadata(): Promise<IAudioMetadata> {
        const buf = Buffer.alloc(100);
        const fileHandle = await fsPromises.open(this.filePath, 'r');
        await fileHandle.read(buf, 0, buf.length, 0);
        await fileHandle.close();

        const pageSegments = buf.readUInt8(26);
        const headerOffset = 27 + pageSegments;

        const magic = buf.slice(headerOffset, headerOffset + 8).toString('ascii');

        if (magic !== 'OpusHead') {
            throw new Error('Неизвестный или неподдерживаемый кодек: ' + magic);
        }

        const channels   = buf.readUInt8(headerOffset + 9);
        const sampleRate = buf.readUInt32LE(headerOffset + 12);

        const bytesPerSample = 16 / 8;

        return { sampleRate: sampleRate, channels: channels, bytesPerSample, dataOffset: 0 };

        //
        // console.log('magic', magic2);
        // const packetType = buf.readUInt8(headerOffset);
        // if (packetType !== 1) {
        //     throw new Error('Ожидали идентификационный пакет Vorbis (тип 1), а получили ' + packetType);
        // }
        //
        // const magic = buf.slice(headerOffset + 1, headerOffset + 1 + 8).toString('ascii');
        //
        // if (magic.startsWith('vorbis')) {
        //     const version = buf.readUInt32LE(headerOffset + 7);
        //     if (version !== 0) {
        //         throw new Error('Unsupported Vorbis version ' + version);
        //     }
        //
        //     const channels   = buf.readUInt8(headerOffset + 11);
        //     const sampleRate = buf.readUInt32LE(headerOffset + 12);
        //     const bytesPerSample = 16 / 8;
        //
        //     return { sampleRate: sampleRate, channels: channels, bytesPerSample, dataOffset: 0 };
        // }
        //
        // if (magic === 'OpusHead') {
        //     const channels   = buf.readUInt8(headerOffset + 9);
        //     const sampleRate = buf.readUInt32LE(headerOffset + 12);
        //
        //     const bytesPerSample = 16 / 8;
        //
        //     return { sampleRate: sampleRate, channels: channels, bytesPerSample, dataOffset: 0 };
        // }
        //
        //
        // throw new Error('Неизвестный или неподдерживаемый кодек: ' + magic);
    }
}

/**
 * Пакует Float32Array[] каналов в один Int16Array, масштабируя плавающие сэмплы в 16‑бит.
 * @param channelData Массив Float32Array — по одному на канал
 * @param samplesPerChannel Количество сэмплов в каждом канале
 * @returns Interleaved Int16Array длины samplesPerChannel * channels
 */
function float32ToInt16Interleaved(
    channelData: Float32Array[],
    samplesPerChannel: number
): Int16Array {
    const channels = channelData.length;
    const out = new Int16Array(samplesPerChannel * channels);

    for (let i = 0; i < samplesPerChannel; i++) {
        for (let ch = 0; ch < channels; ch++) {
            let s = channelData[ch][i];
            // клиппинг
            if (s > 1) s = 1;
            else if (s < -1) s = -1;
            // масштабирование
            out[i * channels + ch] = s < 0
                ? Math.round(s * 0x8000)   // от –32768 до 0
                : Math.round(s * 0x7FFF);  // от 0 до +32767
        }
    }

    return out;
}