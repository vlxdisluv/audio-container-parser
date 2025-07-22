import {AudioFrame} from "@livekit/rtc-node";

export interface IAudioMetadata {
    sampleRate: number;
    channels: number;
    bytesPerSample: number,
    dataOffset: number;
}

export abstract class AudioReader {
    constructor(protected readonly filePath: string) {}

    abstract streamFrames(): AsyncIterable<AudioFrame>;
    abstract getMetadata(): Promise<IAudioMetadata>
}