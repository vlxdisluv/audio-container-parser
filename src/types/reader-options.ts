/**
 * Common options for audio readers.
 */
export interface ReaderOptions {
  /**
   * For PCM/WAV: frame duration in milliseconds (default 200ms).
   */
  frameDurationMs?: number;

  /**
   * For OGG/Opus: estimated per-packet duration in milliseconds to compute timestamps.
   * If omitted, timestamps may be undefined; when provided, timestamps will be accumulated using this value.
   * Typical values: 20, 40, 60.
   */
  opusFrameDurationMs?: number;
}
