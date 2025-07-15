import * as pino from 'pino';
import { LevelWithSilent } from 'pino';

declare const log: pino.Logger<never, boolean>;
type LogLevel = LevelWithSilent;

export { type LogLevel, log };
