import 'dotenv/config';
import { join } from 'path';
import {streamAudioAsFrames} from "./stream-audio";
import {streamAudioAsOpusFrames} from "./stream-audio-as-opus-frames";

// const filepath = join(process.cwd(), 'src', 'test-files', 'change-amelia.ogg');
// streamAudioAsFrames(filepath, 'a7pk-v35v').catch(console.error);

// import WebSocket from 'ws';
// import {streamAudioAsOpusFrames} from "./stream-audio-as-opus-frames";
//
// const ws = new WebSocket('ws://localhost:4002/v1/rtc');
//
// ws.on('error', error => console.error('My error', error));
//
// ws.on('open', function open() {
//     const payload = {
//         type: 'session.join',
//         data: {
//             campaignId: "support-room-42",
//             customer: {
//                 name : "John",
//                 language: "en-US"
//             }
//         }
//     }
//     console.log('Sender: JSON payload', payload);
//     ws.send(JSON.stringify(payload));
//
//     const int16Arr = new Int16Array([1000, -2000, 3000, -32768, 32767]);
//     console.log('Sender: оригинальный Int16Array', int16Arr);
//     ws.send(int16Arr, { binary: true});
// });
//
// ws.on('message', function message(data) {
//     console.log('received: %s', data);
// });
//
const filepath = join(process.cwd(), 'src', 'test-files', 'change-amelia.ogg');
// streamAudioAsFrames(filepath, 'oh2l-fhes').catch(console.error);
streamAudioAsOpusFrames(filepath).catch(console.error);