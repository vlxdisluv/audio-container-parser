import { join } from 'path';
import { AudioReaderFactory } from '../../src';
// @ts-ignore
import { WsAudioStreamer, sleep } from './ws-audio-streamer';

function env(name: string, fallback?: string): string | undefined {
  return process.env[name] ?? fallback;
}

async function main() {
  // Inputs from env vars or defaults for local testing
  const FILE = env('FILE') ?? join(process.cwd(), 'examples', 'assets', 'sample-speech.l16.16k.wav');
  const CODEC = env('CODEC') ?? 'l16';
  const WS_URI = env('WS_URI') ?? 'ws://localhost:4002';
  const API_TOKEN = env('API_TOKEN') ?? 'dev-token';
  const CAMPAIGN_ID = env('CAMPAIGN_ID') ?? 'local-campaign-id';

  const url = `${WS_URI}/v1/rtc?token=${API_TOKEN}&session_id=123`;

  const reader = AudioReaderFactory.create(FILE);
  const meta = await reader.getMetadata();
  const sampleRate = meta.sampleRate;
    console.log('sampleRate', sampleRate);
  const joinPayload = {
    event: 'session.join',
    data: {
      campaignId: CAMPAIGN_ID,
      customer: {
        name: 'John',
        number: '+79000000000',
        attributes: { points: '21312', pointsNum: 123 },
        metadata: { sessionId: '123' },
      },
      sampleRate: sampleRate,
      codec: CODEC,
    },
  };

  const streamer = new WsAudioStreamer({ url, joinPayload, debug: true });
  await streamer.connect();

  await sleep(2000);
  await streamer.join();

  // Delay before publishing frames mirroring original script
  await sleep(10_000);

  let sent = 0;
  for await (const frame of reader.read({ frameDurationMs: 200 })) {
    if (frame.type !== 'pcm') continue;

    frame.data = Buffer.from(frame.data);
    const bytes = frame.data.length;
    const bytesPerSample = frame.bitsPerSample / 8;
    const channels = frame.channels;
    const samples = bytes / (bytesPerSample * channels);
    const frameMs = (samples / frame.sampleRate) * 1000;
    if (sent % 25 === 0) {
      console.debug(`${CODEC.toUpperCase()} egress frame size`, {
          sampleRate: frame.sampleRate,
          bytes,
          samples,
          frameMs: Math.round(frameMs),
      });
    }

    await streamer.sendFrame(frame.data);
    sent++;
  }

  // Post-publish linger to keep session alive (like in original code)
  await sleep(30_000);
  await streamer.close();
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
