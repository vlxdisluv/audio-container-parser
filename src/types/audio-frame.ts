/**
 * Discriminated union representing a produced audio frame.
 */
export type OpusFrame = {
  type: 'opus';
  data: Buffer; // raw Opus packet bytes
  timestamp?: number; // ms since start (estimated)
  sampleRate?: number; // nominal 48000 for Opus
  channels?: number;
};

export type PcmFrame = {
  type: 'pcm' | 'pcmu' | 'pcma';
  data: Buffer; // interleaved PCM bytes
  timestamp?: number; // ms since start
  sampleRate: number;
  channels: number;
  bitsPerSample: number; // e.g., 16 for L16
};

export type AudioFrame = OpusFrame | PcmFrame;
