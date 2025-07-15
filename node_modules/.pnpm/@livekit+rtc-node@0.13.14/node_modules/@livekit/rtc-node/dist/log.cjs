"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var log_exports = {};
__export(log_exports, {
  log: () => log
});
module.exports = __toCommonJS(log_exports);
var import_pino = require("pino");
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
const log = (0, import_pino.pino)(isProduction ? defaultOptions : devOptions);
log.level = isProduction ? "info" : "debug";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  log
});
//# sourceMappingURL=log.cjs.map