import { join } from 'path';
import { AudioReaderFactory } from '../../src';
// @ts-ignore
import {sleep, WsAudioStreamer} from "./ws-audio-streamer";
// import { WsAudioStreamer, sleep } from './ws-audio-streamer';

function env(name: string, fallback?: string): string | undefined {
  return process.env[name] ?? fallback;
}

async function main() {
  // Inputs from env vars or defaults for local testing
  const FILE = env('FILE') ?? join(process.cwd(), 'examples', 'assets', 'sample-opus.ogg');
  const WS_URI = env('WS_URI') ?? 'ws://localhost:4002';
  const API_TOKEN = env('API_TOKEN') ?? 'dev-token';
  const CAMPAIGN_ID = env('CAMPAIGN_ID') ?? 'local-campaign-id';

  const url = `${WS_URI}/v1/rtc?token=${API_TOKEN}&session_id=123`;

  const reader = AudioReaderFactory.create(FILE);
  const meta = await reader.getMetadata();
  const sampleRate = meta.sampleRate || 48000;

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
      sampleRate,
      codec: 'opus',
    },
  };

  const streamer = new WsAudioStreamer({ url, joinPayload, debug: true });
  await streamer.connect();

  await sleep(2000);
  await streamer.join();

  await sleep(10_000);

  let sent = 0;
  for await (const frame of reader.read({ opusFrameDurationMs: 40 })) {
    if (frame.type !== 'opus') continue;
    await streamer.sendFrame(frame.data);
    sent++;
    if (sent % 50 === 0) {
      console.log(`[opus] sent #${sent}, size=${frame.data.length}B, t=${frame.timestamp ?? 'n/a'}ms`);
    }
  }

  // Post-publish linger to keep session alive (like in original code)
  await sleep(30_000);
  await streamer.close();
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
