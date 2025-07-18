import { AudioFrame, AudioSource, LocalAudioTrack, Room, TrackPublishOptions, TrackSource, dispose } from '@livekit/rtc-node';
import { AccessToken } from 'livekit-server-sdk';
import { config } from 'dotenv';
import { promises as fsPromises, createReadStream } from 'fs';
import { join } from 'path';

config();

// Constants for WAV parsing (PCM data)
const WAV_HEADER_BYTES = 44;
const FRAME_DURATION_MS = 1000; // duration of each PCM frame in milliseconds

/**
 * Создает и подключает LiveKit Room
 */
async function createLiveKitRoom(roomName: string): Promise<Room> {
  const token = new AccessToken(
      process.env.LIVEKIT_API_KEY!,
      process.env.LIVEKIT_API_SECRET!,
      { identity: 'sender' }
  );

  token.addGrant({
    room: roomName,
    roomJoin: true,
    roomCreate: true,
    canPublish: true,
  });

  const jwt = await token.toJwt();
  const room = new Room();
  await room.connect(process.env.LIVEKIT_URL!, jwt, {
    autoSubscribe: true,
    dynacast: true,
  });
  return room;
}

/**
 * Читает заголовок WAV и возвращает метаданные PCM
 */
async function readWavMetadata(filePath: string): Promise<{
  sampleRate: number;
  channels: number;
  bytesPerSample: number;
  dataOffset: number;
}> {
  const headerBuffer = Buffer.alloc(WAV_HEADER_BYTES);
  const fileHandle = await fsPromises.open(filePath, 'r');
  await fileHandle.read(headerBuffer, 0, WAV_HEADER_BYTES, 0);
  await fileHandle.close();

  const channels = headerBuffer.readUInt16LE(22);
  const sampleRate = headerBuffer.readUInt32LE(24);
  const bitDepth = headerBuffer.readUInt16LE(34);
  const bytesPerSample = bitDepth / 8;

  return { sampleRate, channels, bytesPerSample, dataOffset: WAV_HEADER_BYTES };
}

/**
 * Публикует аудио-трек в LiveKit и возвращает источник для PCM
 */
async function publishAudioTrack(
    room: Room,
    sampleRate: number,
    channelCount: number
): Promise<AudioSource> {
  const audioSource = new AudioSource(sampleRate, channelCount);
  const track = LocalAudioTrack.createAudioTrack('audio', audioSource);

  const publishOptions = new TrackPublishOptions();
  publishOptions.source = TrackSource.SOURCE_MICROPHONE;

  await room.localParticipant
      .publishTrack(track, publishOptions)
      .then((publication) => publication.waitForSubscription());

  return audioSource;
}

/**
 * Читает WAV-файл и стримит PCM-фреймы в LiveKit
 */
async function streamWavAsPcmFrames(filePath: string, roomName: string): Promise<void> {
  const room = await createLiveKitRoom(roomName);

  try {
    const { sampleRate, channels, bytesPerSample, dataOffset } = await readWavMetadata(filePath);
    const samplesPerFrame = (sampleRate * FRAME_DURATION_MS) / 1000;
    const frameSizeBytes = samplesPerFrame * channels * bytesPerSample;

    console.log({ sampleRate, channels, bytesPerSample, frameSizeBytes });

    const audioSource = await publishAudioTrack(room, sampleRate, channels);

    const pcmStream = createReadStream(filePath, { start: dataOffset, highWaterMark: frameSizeBytes * 2 });
    let bufferAccumulator = Buffer.alloc(0);

    for await (const chunk of pcmStream) {
      bufferAccumulator = Buffer.concat([bufferAccumulator, chunk]);

      while (bufferAccumulator.length >= frameSizeBytes) {
        // Выделяем фрейм и копируем данные, чтобы не ссылаться на общий буфер
        const frameBuffer = bufferAccumulator.subarray(0, frameSizeBytes);
        bufferAccumulator = bufferAccumulator.subarray(frameSizeBytes);
        const frameCopy = Buffer.from(frameBuffer);

        const totalSamples = frameCopy.byteLength / Int16Array.BYTES_PER_ELEMENT;
        const samplesPerChannel = totalSamples / channels;

        const pcmView = new Int16Array(
            frameCopy.buffer,
            frameCopy.byteOffset,
            totalSamples
        );

        const audioFrame = new AudioFrame(
            pcmView,
            sampleRate,
            channels,
            samplesPerChannel
        );

        await audioSource.captureFrame(audioFrame);
      }

      console.log('Buffer remaining:', bufferAccumulator.length);
    }

    // Публикация оставшихся сэмплов, если они есть
    if (bufferAccumulator.length > 0) {
      const partialCopy = Buffer.from(bufferAccumulator);
      const totalSamples = partialCopy.byteLength / Int16Array.BYTES_PER_ELEMENT;
      const samplesPerChannel = totalSamples / channels;
      const partialView = new Int16Array(
          partialCopy.buffer,
          partialCopy.byteOffset,
          totalSamples
      );

      await audioSource.captureFrame(
          new AudioFrame(partialView, sampleRate, channels, samplesPerChannel)
      );
    }

    await audioSource.waitForPlayout();
  } finally {
    await room.disconnect();
    await dispose();
  }
}

// Пример использования
const wavFilePath = join(process.cwd(), 'speex.wav');
streamWavAsPcmFrames(wavFilePath, 'ejh1-45qs').catch(console.error);
