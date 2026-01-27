# Audio Container Parser

`audio-container-parser` is a Node.js library that parses audio frames from common audio containers and exposes them as an async iterable of codec-level frames. It reads WAV (PCM 16) and Ogg/Opus files and emits time-aligned frames suitable for real-time or near-real-time streaming (e.g., over WebSocket). No transcoding is performed — containers are parsed and raw codec frames are yielded.

- Zero transcoding: extracts frames as-is (PCM L16, Opus)
- Streaming-friendly: async generator API yields frames on the fly

### Supported formats
- Input (container/codec)
    - WAV (RIFF) / PCM 16 — read and sliced into fixed-duration frames
    - Ogg / Opus — Ogg container parsed, Opus packets extracted

- Output frames (what the library emits)
    - PCM L16 (`type: 'pcm'`) — fixed-time blocks
    - Opus (`type: 'opus'`) — original Opus packets from Ogg without repackaging

Notes:
- Input file MIME typically: `audio/wav` (WAV), `audio/ogg; codecs=opus` (Ogg/Opus)
- Emitted payloads conceptually align with: `audio/L16` (PCM L16), `audio/opus` (Opus)

### Examples
See `examples/` for end-to-end scripts, including WebSocket publishing:
- `examples/ws/ws-stream-wav.ts`
- `examples/ws/ws-stream-opus.ts`

### Installation
```bash
pnpm add audio-container-parser
# or
npm install audio-container-parser
# or
yarn add audio-container-parser
```