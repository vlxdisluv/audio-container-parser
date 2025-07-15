import { pino } from "pino";
const isProduction = process.env.NODE_ENV === "production";
const defaultOptions = { name: "lk-rtc" };
const devOptions = {
  ...defaultOptions,
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true
    }
  }
};
const log = pino(isProduction ? defaultOptions : devOptions);
log.level = isProduction ? "info" : "debug";
export {
  log
};
//# sourceMappingURL=log.js.map