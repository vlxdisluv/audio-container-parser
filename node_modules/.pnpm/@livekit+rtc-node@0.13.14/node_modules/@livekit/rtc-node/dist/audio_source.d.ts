import { AudioFrame } from './audio_frame.js';
import { FfiHandle } from './napi/native.d.js';
import { AudioSourceInfo } from './proto/audio_frame_pb.js';
import '@bufbuild/protobuf';
import './proto/track_pb.js';
import './proto/stats_pb.js';
import './proto/e2ee_pb.js';
import './proto/handle_pb.js';

declare class AudioSource {
    /** @internal */
    info: AudioSourceInfo;
    /** @internal */
    ffiHandle: FfiHandle;
    /** @internal */
    lastCapture: number;
    /** @internal */
    currentQueueSize: number;
    /** @internal */
    release: () => void;
    promise: Promise<void>;
    /** @internal */
    timeout?: ReturnType<typeof setTimeout>;
    /** @internal */
    closed: boolean;
    sampleRate: number;
    numChannels: number;
    queueSize: number;
    constructor(sampleRate: number, numChannels: number, queueSize?: number);
    get queuedDuration(): number;
    clearQueue(): void;
    /** @internal */
    newPromise(): Promise<void>;
    waitForPlayout(): Promise<void>;
    captureFrame(frame: AudioFrame): Promise<void>;
    close(): Promise<void>;
}

export { AudioSource };
