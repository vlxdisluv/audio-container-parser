import { join } from 'path';
import { AudioReaderFactory } from '../src';

async function main() {
  // Use an example .ogg file from repo
  const filepath = join(process.cwd(), 'examples', 'assets', 'sample-opus.ogg');
  const reader = AudioReaderFactory.create(filepath);

  let count = 0;
  let bytes = 0;
  const start = Date.now();

  for await (const frame of reader.read({ opusFrameDurationMs: 40 })) {
    if (frame.type !== 'opus') continue;
    count += 1;
    bytes += frame.data.length;
    if (count % 50 === 0) {
      console.log(`OPUS packet #${count}, size=${frame.data.length}B, t=${frame.timestamp ?? 'n/a'}ms`);
    }
  }

  const elapsed = Date.now() - start;
  console.log(`Done. Packets=${count}, totalBytes=${bytes}, elapsed=${elapsed}ms`);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
