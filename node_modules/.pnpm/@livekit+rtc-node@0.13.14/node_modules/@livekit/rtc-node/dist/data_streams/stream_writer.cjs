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
var stream_writer_exports = {};
__export(stream_writer_exports, {
  ByteStreamWriter: () => ByteStreamWriter,
  TextStreamWriter: () => TextStreamWriter
});
module.exports = __toCommonJS(stream_writer_exports);
class BaseStreamWriter {
  constructor(writableStream, info, onClose) {
    this.writableStream = writableStream;
    this.defaultWriter = writableStream.getWriter();
    this.onClose = onClose;
    this.info = info;
  }
  write(chunk) {
    return this.defaultWriter.write(chunk);
  }
  async close() {
    var _a;
    await this.defaultWriter.close();
    this.defaultWriter.releaseLock();
    (_a = this.onClose) == null ? void 0 : _a.call(this);
  }
}
class TextStreamWriter extends BaseStreamWriter {
}
class ByteStreamWriter extends BaseStreamWriter {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ByteStreamWriter,
  TextStreamWriter
});
//# sourceMappingURL=stream_writer.cjs.map