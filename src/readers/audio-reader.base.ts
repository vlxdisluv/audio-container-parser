import type { ReaderOptions } from '../types/reader-options';
import type { AudioFrame } from '../types/audio-frame';
import type { CommonAudioMetadata } from '../types/audio-metadata';

export abstract class AudioReader<TMetadata extends CommonAudioMetadata = CommonAudioMetadata> {
    constructor(protected readonly filePath: string) {}

    /**
     * Read audio frames as an async iterator of typed frames.
     * Concrete strategies should implement this method.
     */
    abstract read(options?: ReaderOptions): AsyncIterable<AudioFrame>;

    /**
     * Returns decoded file metadata (strategy specific).
     */
    abstract getMetadata(): Promise<TMetadata>;
}