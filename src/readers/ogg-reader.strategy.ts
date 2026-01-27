import { AudioReader } from "./audio-reader.base";
import {createReadStream, promises as fsPromises} from "fs";
import type { AudioFrame } from '../types/audio-frame';
import type { ReaderOptions } from '../types/reader-options';
import type { OggMetadata } from '../types/audio-metadata';

export class OggReader extends AudioReader<OggMetadata>{
    public async *read(options?: ReaderOptions): AsyncIterable<AudioFrame> {
        const { sampleRate, channels } = await this.getMetadata();

        const opusStream = createReadStream(this.filePath);
        let bufferAccumulator = Buffer.alloc(0);
        let continuationBuffer = Buffer.alloc(0);
        let packetIndex = 0;
        const frameDuration = options?.opusFrameDurationMs; // optional

        for await (const chunk of opusStream) {
            bufferAccumulator = Buffer.concat([bufferAccumulator, chunk]);

            while (bufferAccumulator.length >= 27) {
                if (bufferAccumulator.toString('ascii', 0, 4) !== 'OggS') {
                    const idx = bufferAccumulator.indexOf('OggS');
                    if (idx < 0) { bufferAccumulator = Buffer.alloc(0); break; }
                    bufferAccumulator = bufferAccumulator.slice(idx);
                }

                const segmentCount = bufferAccumulator.readUInt8(26);
                const headerSize   = 27 + segmentCount;
                if (bufferAccumulator.length < headerSize) break;

                const segmentTable = bufferAccumulator.slice(27, headerSize);
                const dataSize     = Array.from(segmentTable).reduce((s, v) => s + v, 0);
                const pageSize     = headerSize + dataSize;
                if (bufferAccumulator.length < pageSize) break;

                const pageBuf = bufferAccumulator.slice(0, pageSize);
                bufferAccumulator = bufferAccumulator.slice(pageSize);

                const pageSeq = pageBuf.readUInt32LE(18);
                if (pageSeq < 2) {
                    continuationBuffer = Buffer.alloc(0);
                    continue;
                }

                const headerType = pageBuf.readUInt8(5);
                let isContinued  = Boolean(headerType & 0x01);

                const payload = pageBuf.slice(headerSize);

                let offset   = 0;
                let fragBufs: Buffer[] = [];
                for (let i = 0; i < segmentCount; i++) {
                    const lace = segmentTable[i];
                    const seg  = payload.slice(offset, offset + lace);
                    offset += lace;

                    if (isContinued && fragBufs.length === 0) {
                        fragBufs.push(Buffer.concat([continuationBuffer, seg]));
                        continuationBuffer = Buffer.alloc(0);
                    } else {
                        fragBufs.push(seg);
                    }

                    if (lace < 255) {
                        const opusPacket = Buffer.concat(fragBufs);

                        const timestamp = frameDuration != null ? packetIndex * frameDuration : undefined;
                        packetIndex += 1;

                        const frame: AudioFrame = {
                            type: 'opus',
                            data: opusPacket,
                            timestamp,
                            sampleRate,
                            channels
                        };
                        yield frame;

                        fragBufs = [];
                        isContinued = false;
                    }
                }

                if (segmentTable[segmentCount - 1] === 255) {
                    continuationBuffer = Buffer.concat(fragBufs);
                }
            }
        }
    }

    public async getMetadata(): Promise<OggMetadata> {
        const buf = Buffer.alloc(100);
        const fileHandle = await fsPromises.open(this.filePath, 'r');
        await fileHandle.read(buf, 0, buf.length, 0);
        await fileHandle.close();

        const pageSegments = buf.readUInt8(26);
        const headerOffset = 27 + pageSegments;

        const magic = buf.slice(headerOffset, headerOffset + 8).toString('ascii');

        if (magic !== 'OpusHead') {
            throw new Error('Unknown or not supported codec: ' + magic);
        }

        const channels   = buf.readUInt8(headerOffset + 9);
        const sampleRate = buf.readUInt32LE(headerOffset + 12);

        return { sampleRate, channels };
    }
}