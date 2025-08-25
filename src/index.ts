import 'dotenv/config';

import WebSocket from 'ws';
import {join} from "path";
import {streamAudioAsOpusFrames} from "./stream-audio-as-opus-frames";
const URL =
    'ws://localhost:4002/v1/rtc?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOiJlNTE0OGYzYS00ZjEwLTQ3MWQtYTM0Yi05MjBiZjMyZmM5NzkiLCJpYXQiOjE3NTQwNDk4MjEsInN0cmF0ZWd5IjoiZXh0ZXJuYWwiLCJyb2xlIjoiYXBpIiwiZXhwIjoxOTI2ODQ5ODIxLCJhdWQiOiJleHRlcm5hbDphcGkiLCJqdGkiOiI1YmM1ZTZmOC1lNDcyLTQ1MjgtODNkYS03MzgxMjNhOTgxYzMifQ.Um7hLr8wa4G__JFn6ika6vT0-u7E1cUGRuekn5faaxw';
    // 'ws://localhost:4002/v1/rtc';

function makeClient(label: string, customerName: string) {
    const sock = new WebSocket(URL);

    sock.on('open', () => {
        const payload = {
            event: 'session.join',
            data: {
                campaignId: 'ba06d5a6-5e4d-4d88-b7c0-aebb95954360',
                customer: { name: customerName },
            },
        };
        console.log(`[${label}] ->`, payload);
        sock.send(JSON.stringify(payload));
    });

    sock.on('message', (data, isBinary) => {
        const raw = isBinary ? data : data.toString('utf8');
        // Попробуем распарсить JSON и пороутить по полю event/type
        try {
            const msg = typeof raw === 'string' ? JSON.parse(raw) : raw;
            // Примеры роутинга
            const event = msg?.event ?? msg?.type ?? 'unknown';
            if (event === 'session.ready') {
                console.log(`[${label}] session.ready ✅`, msg);
            } else {
                console.log(`[${label}] message`, msg);
            }
        } catch {
            console.log(`[${label}] message (text)`, raw);
        }
    });

    sock.on('error', (err) => {
        console.error(`[${label}] error:`, err);
    });

    sock.on('close', (code, reason) => {
        const reasonText =
            reason && reason.toString ? reason.toString('utf8') : '';
        console.log(`[${label}] closed`, code, reasonText);
    });

    return sock;
}

// const ws1 = makeClient('ws1', 'John');
// const ws2 = makeClient('ws2', 'Nik');

const filepath = join(process.cwd(), 'src', 'test-files', 'change-amelia.ogg');
streamAudioAsOpusFrames(filepath).catch(console.error);