/**
 * Common subset of audio metadata shared by all formats.
 */
export interface CommonAudioMetadata {
  sampleRate: number;
  channels: number;
}

/**
 * WAV/PCM-specific metadata.
 */
export interface WavMetadata extends CommonAudioMetadata {
  encoding: 'L16' | 'PCMU' | 'PCMA';
  audioFormat: number;
  bitsPerSample: number;
  bytesPerSample: number;
  dataOffset: number;
}

/**
 * OGG/Opus-specific metadata.
 * For now Opus provides only sampleRate/channels.
 */
export interface OggMetadata extends CommonAudioMetadata {}
