import {WavReader} from "../readers/wav-reader.strategy";
import {AudioReader} from "../readers/audio-reader.base";
import {OggReader} from "../readers/ogg-reader.strategy";

export class AudioReaderFactory {
    static create(filePath: string): AudioReader {
        const ext = this.extname(filePath).toLowerCase();
        switch (ext) {
            case '.wav': return new WavReader(filePath);
            case '.ogg': return new OggReader(filePath);
            default: throw new Error(`Unsupported format: ${filePath}`);
        }
    }

    static extname(filePath: string) {
        const index = filePath.lastIndexOf('.');
        return filePath.substring(index);
    }
}
