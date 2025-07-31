import {AudioSource, dispose, LocalAudioTrack, Room, TrackPublishOptions, TrackSource} from "@livekit/rtc-node";
import {AccessToken} from "livekit-server-sdk";
import {AudioReaderFactory} from "./factories/audio-reader.factory";



import WebSocket from 'ws';



function waitConnection(ws: WebSocket): Promise<void> {
    if (ws.readyState === WebSocket.OPEN) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        const onOpen = () => {
            cleanup();
            resolve();
        };
        const onError = (err: Error) => {
            cleanup();
            reject(err);
        };
        const cleanup = () => {
            ws.removeListener('open', onOpen);
            ws.removeListener('error', onError);
        };

        ws.once('open', onOpen);
        ws.once('error', onError);
    });
}

// ws.on('open', function open() {
//     console.log('Connection opened');
//     // const payload = {
//     //     type: 'session.join',
//     //     data: {
//     //         campaignId: "support-room-42",
//     //         customer: {
//     //             name : "John",
//     //             language: "en-US"
//     //         }
//     //     }
//     // }
//     // console.log('Sender: JSON payload', payload);
//     // ws.send(JSON.stringify(payload));
//     //
//     // const int16Arr = new Int16Array([1000, -2000, 3000, -32768, 32767]);
//     // console.log('Sender: оригинальный Int16Array', int16Arr);
//     // ws.send(int16Arr, { binary: true});
// });

// ws.on('message', function message(data) {
//     console.log('received: %s', data);
// });


// async function publishAudioTrack(
//     room: Room,
//     sampleRate: number,
//     channelCount: number
// ): Promise<AudioSource> {
//     const audioSource = new AudioSource(sampleRate, channelCount);
//     // const track = LocalAudioTrack.createAudioTrack('audio', audioSource);
//
//     const publishOptions = new TrackPublishOptions();
//     publishOptions.source = TrackSource.SOURCE_MICROPHONE;
//
//     // await room.localParticipant
//     //     .publishTrack(track, publishOptions)
//     //     .then((publication) => publication.waitForSubscription());
//
//     return audioSource;
// }

function sendFrame(ws: WebSocket, frame: Buffer | ArrayBuffer): Promise<void> {

    // let buf: Buffer;
    //
    // if (Buffer.isBuffer(frame)) {
    //     buf = frame;
    // } else if (ArrayBuffer.isView(frame)) {
    //     // TypedArray либо DataView
    //     buf = Buffer.from(frame.buffer, frame.byteOffset, frame.byteLength);
    // } else {
    //     // чистый ArrayBuffer
    //     buf = Buffer.from(frame);
    // }
    //
    return new Promise((resolve, reject) => {
        ws.send(frame, { binary: true }, (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
}

export async function streamAudioAsOpusFrames(filePath: string): Promise<void> {

    const ws = new WebSocket('ws://localhost:4002/v1/rtc');
    await waitConnection(ws)

    try {
        const audioReader =  AudioReaderFactory.create(filePath);
        // const { sampleRate, channels } = await audioReader.getMetadata()

        // console.log({ sampleRate, channels})
        // const audioSource = await publishAudioTrack(room, sampleRate, channels);

        for await (const audioFrame of audioReader.streamOpusFrames()) {

            console.log('recv', audioFrame);
            await sendFrame(ws, audioFrame);
            // ws.send(audioFrame, { binary: true}, () => {
            //     if (err) return reject(err);
            // });
            // await audioSource.captureFrame(audioFrame);
        }

        // await audioSource.waitForPlayout();
    } finally {
        ws.close();
        // await room.disconnect();
        // await dispose();
    }
}