import {AudioSource, dispose, LocalAudioTrack, Room, TrackPublishOptions, TrackSource} from "@livekit/rtc-node";
import {AccessToken} from "livekit-server-sdk";
import {AudioReaderFactory} from "./factories/audio-reader.factory";

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

export async function streamAudioAsFrames(filePath: string, roomName: string): Promise<void> {
    const room = await createLiveKitRoom(roomName);

    try {
        const audioReader =  AudioReaderFactory.create(filePath);
        const { sampleRate, channels } = await audioReader.getMetadata()

        console.log({ sampleRate, channels})
        const audioSource = await publishAudioTrack(room, sampleRate, channels);

        for await (const audioFrame of audioReader.streamFrames()) {
            await audioSource.captureFrame(audioFrame);
        }

        await audioSource.waitForPlayout();
    } finally {
        await room.disconnect();
        await dispose();
    }
}