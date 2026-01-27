import { AudioReader } from "./audio-reader.base";
import {createReadStream, promises as fsPromises} from "fs";

import type { AudioFrame } from '../types/audio-frame';
import type { ReaderOptions } from '../types/reader-options';
import type { WavMetadata } from '../types/audio-metadata';

export class WavReader extends AudioReader<WavMetadata>{
    private readonly DEFAULT_FRAME_DURATION_MS = 200;

    public async *read(options?: ReaderOptions): AsyncIterable<AudioFrame> {
        const { sampleRate, channels, bytesPerSample, bitsPerSample, dataOffset } = await this.getMetadata();
        if (bytesPerSample == null || bitsPerSample == null || dataOffset == null) {
            throw new Error('Invalid WAV metadata: missing required fields');
        }

        const frameDurationMs = options?.frameDurationMs ?? this.DEFAULT_FRAME_DURATION_MS;
        const samplesPerFrame = Math.floor((sampleRate * frameDurationMs) / 1000);
        const frameSizeBytes = samplesPerFrame * channels * bytesPerSample;

        const pcmStream = createReadStream(this.filePath, { start: dataOffset, highWaterMark: Math.max(4096, frameSizeBytes * 2) });

        let acc = Buffer.alloc(0);
        let frameIndex = 0;

        for await (const chunk of pcmStream) {
            acc = Buffer.concat([acc, chunk]);

            while (acc.length >= frameSizeBytes) {
                const frame = acc.subarray(0, frameSizeBytes);
                acc = acc.subarray(frameSizeBytes);

                // Copy because stream reuses internal buffers
                const data = Buffer.from(frame);
                const timestamp = frameIndex * frameDurationMs;
                frameIndex += 1;

                yield {
                    type: 'pcm',
                    data,
                    timestamp,
                    sampleRate,
                    channels,
                    bitsPerSample
                };
            }
        }

        if (acc.length > 0) {
            const timestamp = frameIndex * (options?.frameDurationMs ?? this.DEFAULT_FRAME_DURATION_MS);
            yield {
                type: 'pcm',
                data: Buffer.from(acc),
                timestamp,
                sampleRate,
                channels,
                bitsPerSample
            };
        }
    }

    public async getMetadata(): Promise<WavMetadata> {
        const buf = Buffer.alloc(44);
        const fh = await fsPromises.open(this.filePath, 'r');
        await fh.read(buf, 0, 44, 0);
        await fh.close();

        // RIFF / WAVE
        if (buf.toString('ascii', 0, 4) !== 'RIFF')
            throw new Error('Not RIFF');

        if (buf.toString('ascii', 8, 12) !== 'WAVE')
            throw new Error('Not WAVE');

        // fmt chunk
        if (buf.toString('ascii', 12, 16) !== 'fmt ')
            throw new Error('Invalid WAV: fmt chunk not found');

        const fmtSize = buf.readUInt32LE(16);
        if (fmtSize !== 16)
            throw new Error('Unsupported WAV: extended fmt');

        const audioFormat = buf.readUInt16LE(20);
        const channels = buf.readUInt16LE(22);
        const sampleRate = buf.readUInt32LE(24);
        const bitsPerSample = buf.readUInt16LE(34);

        let encoding: 'L16' | 'PCMU' | 'PCMA';

        if (audioFormat === 1 && bitsPerSample === 16) {
            encoding = 'L16';
        } else if (audioFormat === 6 && bitsPerSample === 8) {
            encoding = 'PCMU';
        } else if (audioFormat === 7 && bitsPerSample === 8) {
            encoding = 'PCMA';
        } else {
            throw new Error(
                `Unsupported WAV format: audioFormat=${audioFormat}, bits=${bitsPerSample}`
            );
        }

        // data chunk
        if (buf.toString('ascii', 36, 40) !== 'data')
            throw new Error('data chunk not found');

        return {
            encoding,
            audioFormat,
            sampleRate,
            channels,
            bitsPerSample,
            bytesPerSample: bitsPerSample / 8,
            dataOffset: 44
        };
    }
}