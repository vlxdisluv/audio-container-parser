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
export {
  ByteStreamWriter,
  TextStreamWriter
};
//# sourceMappingURL=stream_writer.js.map