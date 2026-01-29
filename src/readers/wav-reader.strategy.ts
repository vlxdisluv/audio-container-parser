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
        const fh = await fsPromises.open(this.filePath, 'r');
        try {
            const riff = Buffer.alloc(12);
            await fh.read(riff, 0, 12, 0);
            if (riff.toString('ascii', 0, 4) !== 'RIFF') throw new Error('Not RIFF');
            if (riff.toString('ascii', 8, 12) !== 'WAVE') throw new Error('Not WAVE');

            let offset = 12;

            let audioFormat: number | undefined;
            let channels: number | undefined;
            let sampleRate: number | undefined;
            let bitsPerSample: number | undefined;
            let dataOffset: number | undefined;

            while (true) {
                const hdr = Buffer.alloc(8);
                const { bytesRead } = await fh.read(hdr, 0, 8, offset);
                if (bytesRead < 8) break;

                const id = hdr.toString('ascii', 0, 4);
                const size = hdr.readUInt32LE(4);
                const chunkDataPos = offset + 8;

                if (id === 'fmt ') {
                    const need = Math.min(size, 32);
                    const fmt = Buffer.alloc(need);
                    await fh.read(fmt, 0, need, chunkDataPos);

                    audioFormat = fmt.readUInt16LE(0);
                    channels = fmt.readUInt16LE(2);
                    sampleRate = fmt.readUInt32LE(4);
                    bitsPerSample = fmt.readUInt16LE(14);

                } else if (id === 'data') {
                    dataOffset = chunkDataPos;
                    if (audioFormat != null) {
                        break;
                    }
                }

                const pad = size % 2;
                offset = chunkDataPos + size + pad;
            }

            if (
                audioFormat == null ||
                channels == null ||
                sampleRate == null ||
                bitsPerSample == null ||
                dataOffset == null
            ) {
                throw new Error('Invalid WAV: required fmt/data chunks not found');
            }

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

            return {
                encoding,
                audioFormat,
                sampleRate,
                channels,
                bitsPerSample,
                bytesPerSample: bitsPerSample / 8,
                dataOffset,
            };
        } finally {
            await fh.close();
        }
    }
}