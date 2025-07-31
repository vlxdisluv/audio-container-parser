import {AudioReader, IAudioMetadata} from "./audio-reader.base";
import {AudioFrame} from "@livekit/rtc-node";
import {createReadStream, promises as fsPromises} from "fs";

export class WavReader extends AudioReader{
    WAV_HEADER_BYTES = 44;
    FRAME_DURATION_MS = 1000;


    public async *streamFrames(): AsyncIterable<AudioFrame> {
        // Извлекаем метаданные WAV
        const { sampleRate, channels, bytesPerSample, dataOffset } = await this.getMetadata();
        const samplesPerFrame = (sampleRate * this.FRAME_DURATION_MS) / 1000;
        const frameSizeBytes = samplesPerFrame * channels * bytesPerSample;

        // Создаем поток чтения данных после заголовка
        const pcmStream = createReadStream(this.filePath, { start: dataOffset, highWaterMark: frameSizeBytes * 2 });
        let bufferAccumulator = Buffer.alloc(0);

        for await (const chunk of pcmStream) {
            bufferAccumulator = Buffer.concat([bufferAccumulator, chunk]);

            while (bufferAccumulator.length >= frameSizeBytes) {
                const frameBuffer = bufferAccumulator.subarray(0, frameSizeBytes);
                bufferAccumulator = bufferAccumulator.subarray(frameSizeBytes);
                const frameCopy = Buffer.from(frameBuffer);

                const totalSamples = frameBuffer.byteLength / Int16Array.BYTES_PER_ELEMENT;
                const samplesPerChannel = totalSamples / channels;
                const pcmView = new Int16Array(frameCopy.buffer, frameCopy.byteOffset, totalSamples);

                yield new AudioFrame(pcmView, sampleRate, channels, samplesPerChannel);
            }
        }

        // Оставшиеся сэмплы
        if (bufferAccumulator.length > 0) {
            const partialCopy = Buffer.from(bufferAccumulator);
            const totalSamples = partialCopy.byteLength / Int16Array.BYTES_PER_ELEMENT;
            const samplesPerChannel = totalSamples / channels;

            const partialView = new Int16Array(partialCopy.buffer, partialCopy.byteOffset, partialCopy.byteLength / Int16Array.BYTES_PER_ELEMENT);
            yield new AudioFrame(partialView, sampleRate, channels, samplesPerChannel);
        }
    }

    public async *streamOpusFrames(): AsyncIterable<Buffer> {
        throw new Error('Not implemented');
    }
    /**
     * Reads a WAV headers and returns PCM metadata
     */
    public async getMetadata(): Promise<IAudioMetadata> {
        const headerBuffer = Buffer.alloc(this.WAV_HEADER_BYTES);
        const fileHandle = await fsPromises.open(this.filePath, 'r');
        await fileHandle.read(headerBuffer, 0, this.WAV_HEADER_BYTES, 0);
        await fileHandle.close();

        const channels = headerBuffer.readUInt16LE(22);
        const sampleRate = headerBuffer.readUInt32LE(24);
        const bitDepth = headerBuffer.readUInt16LE(34);
        const bytesPerSample = bitDepth / 8;

        return { sampleRate, channels, bytesPerSample, dataOffset: this.WAV_HEADER_BYTES };
    }
}