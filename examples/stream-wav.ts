import { join } from 'path';
import { AudioReaderFactory } from '../src';

async function main() {
  // Use an example .wav file from repo
  const filepath = join(process.cwd(), 'examples', 'assets', 'sample-speech.wav');
  const reader = AudioReaderFactory.create(filepath);

  let frames = 0;
  let samples = 0;
  let bytes = 0;

  for await (const frame of reader.read({ frameDurationMs: 200 })) {
    if (frame.type !== 'pcm') continue;
    frames += 1;
    bytes += frame.data.length;
    const samplesInFrame = frame.data.length / (frame.bitsPerSample / 8);
    samples += samplesInFrame;

    if (frames % 50 === 0) {
      console.log(
        `PCM frame #${frames}: ${frame.data.length}B, ${frame.sampleRate}Hz, ${frame.channels}ch, ${frame.bitsPerSample}bit, t=${frame.timestamp ?? 'n/a'}ms`
      );
    }
  }

  console.log(`Done. frames=${frames}, totalBytes=${bytes}, approxSamples=${samples}`);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
