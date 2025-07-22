import 'dotenv/config';
import { join } from 'path';
import {streamAudioAsFrames} from "./stream-audio";

const filepath = join(process.cwd(), 'src', 'test-files', 'change-amelia-v2.ogg');
streamAudioAsFrames(filepath, 'a7pk-v35v').catch(console.error);
