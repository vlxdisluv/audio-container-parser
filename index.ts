import {
  AudioFrame,
  AudioSource,
  LocalAudioTrack,
  Room,
  TrackPublishOptions,
  TrackSource,
  dispose,
} from '@livekit/rtc-node';
import { config } from 'dotenv';
import { AccessToken } from 'livekit-server-sdk';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { promises as fs } from 'fs';
config();
import { createReadStream } from 'fs';
// console.log('1');
// // create access token from API credentials
// const token = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, {
//   identity: 'sender',
// });
// console.log('2');
// token.addGrant({
//   room: 'example-room',
//   roomJoin: true,
//   roomCreate: true,
//   canPublish: true,
// });
// const jwt = await token.toJwt();
// // set up room
// const room = new Room();
// await room.connect(process.env.LIVEKIT_URL, jwt, { autoSubscribe: true, dynacast: true });
//
// // read relevant metadata from wav file
// // this example assumes valid encoding little-endian
// const sample = readFileSync(join(process.cwd(), './speex.wav'));
// const channels = sample.readUInt16LE(22);
// const sampleRate = sample.readUInt32LE(24);
// const dataSize = sample.readUInt32LE(40) / 2;
//
// console.log('channels', channels);
// console.log('sampleRate', sampleRate);
// console.log('dataSize', dataSize)
//
// // set up audio track
// const source = new AudioSource(sampleRate, channels);
// const track = LocalAudioTrack.createAudioTrack('audio', source);
// const options = new TrackPublishOptions();
// const buffer = new Int16Array(sample.buffer);
// options.source = TrackSource.SOURCE_MICROPHONE;
// await room.localParticipant.publishTrack(track, options).then((pub) => pub.waitForSubscription());
//
// let written = 44; // start of WAVE data stream
// const FRAME_DURATION = 1; // write 1s of audio at a time
// const numSamples = sampleRate * FRAME_DURATION;
// while (written < dataSize) {
//   const available = dataSize - written;
//   const frameSize = Math.min(numSamples, available);
//
//   const frame = new AudioFrame(
//     buffer.subarray(written, written + frameSize),
//     sampleRate,
//     channels,
//     Math.trunc(frameSize / channels),
//   );
//   await source.captureFrame(frame);
//   written += frameSize;
// }
// await source.waitForPlayout();
// // release resources allocated for audio publishing
//
// console.log('track', track);
// // await track.close(); // this deallocate source as well
//
// await room.disconnect();
//
// // disposes all resources, only use if no more sessions are expected
// await dispose();

// import { createReadStream } from 'fs';
// import {
//   AudioFrame,
//   AudioSource,
//   dispose,
// } from '@livekit/rtc-node';
// import { promises as fs } from 'fs';
// import { join } from 'path';

const token = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, {
  identity: 'sender',
});
token.addGrant({
  room: 'example-room',
  roomJoin: true,
  roomCreate: true,
  canPublish: true,
});
const jwt = await token.toJwt();
// set up room
const room = new Room();
await room.connect(process.env.LIVEKIT_URL, jwt, { autoSubscribe: true, dynacast: true });


async function streamWavAsOpusFrames(filePath: string) {
  // Сначала читаем заголовок, чтобы узнать sampleRate, channels и байтовую глубину
  const header = Buffer.alloc(44);
  const fd = await fs.open(filePath, 'r');
  await fd.read(header, 0, 44, 0);
  await fd.close();

  const channels   = header.readUInt16LE(22);
  const sampleRate = header.readUInt32LE(24);
  const bitDepth   = header.readUInt16LE(34);
  const bytesPerSample = bitDepth / 8;

  console.log({
    channels, sampleRate, bitDepth, bytesPerSample
  })

//   const channels2 = header.readUInt16LE(22);
// const sampleRate2 = header.readUInt32LE(24);
// const dataSize2 = header.readUInt32LE(40) / 2;
// console.log({
//   channels2, sampleRate2, dataSize2,
// })

  // Размер 20 ms фрейма в байтах (по спецификации: RFC 7587 для Opus, little-endian PCM)
  // const FRAME_DURATION = 1; // write 1s of audio at a time
  // const numSamples = sampleRate * FRAME_DURATION;

  const frameDurationMs = 1000;
  const samplesPerFrame = (sampleRate * frameDurationMs) / 1000;
  const frameSizeBytes   = samplesPerFrame * channels * bytesPerSample; // 3840

  console.log({
    frameDurationMs,
    // frameDurationMs,
    frameSizeBytes
  })

  // const FRAME_DURATION = 1; // write 1s of audio at a time
  // const numSamples = sampleRate * FRAME_DURATION;
  // const frameSize = samplesPerFrame * channels * bytesPerSample;

  // set up audio track
  const source = new AudioSource(sampleRate, channels);
  const track = LocalAudioTrack.createAudioTrack('audio', source);
  const options = new TrackPublishOptions();
  options.source = TrackSource.SOURCE_MICROPHONE;
  await room.localParticipant.publishTrack(track, options).then((pub) => pub.waitForSubscription());


  // Поток чтения, highWaterMark = хотя бы frameSize, чтобы получать не слишком маленькие чанки
  const stream = createReadStream(filePath, { start: 44, highWaterMark: frameSizeBytes });
  let buf = Buffer.alloc(0);


  for await (const chunk of stream) {
    buf = Buffer.concat([buf, chunk]);
    // Пока в буфере есть хотя бы один полный кадр
    while (buf.length >= frameSizeBytes) {
      // вырезаем ровно frameSize байт
      const frameBuf = buf.subarray(0, frameSizeBytes);
      buf = buf.subarray(frameSizeBytes);

      // конвертируем Buffer в Int16Array (PCM16 little-endian)
      // const int16 = new Int16Array(
      //     frameBuf.buffer,
      //     // frameBuf.byteOffset,
      //     // frameBuf.byteLength / Int16Array.BYTES_PER_ELEMENT,
      // );

      const int16 = new Int16Array(
          frameBuf.buffer,               // общий ArrayBuffer
          frameBuf.byteOffset,           // смещение в нём, откуда начинаются ваши байты
          samplesPerFrame * channels     // длина в сэмплах (samplesPerChannel * channels)
      );


      const frame = new AudioFrame(
          int16,
          sampleRate,
          channels,
          samplesPerFrame
          // Math.trunc(samplesPerFrame / channels),
      );

      console.log({
        frameDurationMs,
        samplesPerFrame,
        frameSizeBytes,
        int16Length: int16.length,
        declaredSamplesPerChannel: samplesPerFrame
      });

      // Правильное создание AudioFrame по вашей структуре
      // const frame = new AudioFrame(
      //     slice,
      //     sampleRate,
      //     channels,
      //     Math.trunc(frameSize / channels),
      // );
      await source.captureFrame(frame);
    }
  }

  await source.waitForPlayout();
  // await track.close();
  await room.disconnect();

  await dispose();
}

// Использование
const wavPath = join(process.cwd(), 'speex.wav');
streamWavAsOpusFrames(wavPath).catch(console.error);
