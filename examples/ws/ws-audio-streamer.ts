import WebSocket, { RawData } from 'ws';

export interface WsAudioStreamerOptions {
  url: string;
  joinPayload: unknown; // full JSON payload to send for session.join
  debug?: boolean;
  openTimeoutMs?: number;
}

export class WsAudioStreamer {
  private ws: WebSocket | null = null;
  private readonly url: string;
  private readonly joinPayload: unknown;
  private readonly debug: boolean;
  private readonly openTimeoutMs: number;

  constructor(options: WsAudioStreamerOptions) {
    this.url = options.url;
    this.joinPayload = options.joinPayload;
    this.debug = Boolean(options.debug);
    this.openTimeoutMs = options.openTimeoutMs ?? 15_000;
  }

  async connect(): Promise<void> {
    if (this.ws) return;
    const ws = new WebSocket(this.url);
    this.ws = ws;

    // Log all JSON messages from server (binary is ignored here)
    ws.on('message', (data: RawData, isBinary: boolean) => {
      if (isBinary) return;
      try {
        const msg = JSON.parse(data.toString('utf8'));
        if (this.debug) console.log('[ws<=]', msg);
      } catch {
        // ignore non-JSON
      }
    });

    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error('WebSocket open timeout'));
      }, this.openTimeoutMs);

      const onOpen = () => {
        if (this.debug) console.log('[ws] open');
        cleanup();
        resolve();
      };
      const onError = (err: Error) => {
        cleanup();
        reject(err);
      };
      const cleanup = () => {
        clearTimeout(timeout);
        ws.removeListener('open', onOpen);
        ws.removeListener('error', onError);
      };
      ws.once('open', onOpen);
      ws.once('error', onError);
    });
  }

  async join(): Promise<unknown> {
    if (!this.ws) throw new Error('WebSocket is not connected');
    const ws = this.ws;

    const payload = this.joinPayload;
    if (this.debug) console.log('[ws=>] session.join', payload);
    ws.send(JSON.stringify(payload));

    return new Promise((resolve) => {
      const onMessage = (data: RawData, isBinary: boolean) => {
        const raw = isBinary ? data : data.toString('utf8');
        let msg: any;
        try {
          msg = typeof raw === 'string' ? JSON.parse(raw) : raw;
        } catch {
          return; // ignore non-JSON
        }
        if (msg && msg.event === 'session.ready') {
          if (this.debug) console.log('[ws] session.ready', msg.data);
          ws.off('message', onMessage);
          resolve(msg.data);
        }
      };
      ws.on('message', onMessage);
    });
  }

  async sendFrame(frame: Buffer | ArrayBuffer | ArrayBufferView): Promise<void> {
    if (!this.ws) throw new Error('WebSocket is not connected');
    const ws = this.ws;

    const binary: Buffer | ArrayBufferView | ArrayBuffer =
      frame instanceof Buffer ? frame : frame;

    return new Promise((resolve, reject) => {
      ws.send(binary as any, { binary: true }, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  async close(): Promise<void> {
    if (!this.ws) return;
    if (this.debug) console.log('[ws] closing');
    this.ws.close();
    this.ws = null;
  }
}

export async function sleep(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
