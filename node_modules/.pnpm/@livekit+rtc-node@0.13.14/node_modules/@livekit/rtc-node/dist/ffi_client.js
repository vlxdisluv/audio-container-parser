import EventEmitter from "events";
import {
  FfiHandle,
  livekitCopyBuffer,
  livekitDispose,
  livekitFfiRequest,
  livekitInitialize,
  livekitRetrievePtr
} from "./napi/native.js";
import { FfiEvent, FfiRequest, FfiResponse } from "./proto/ffi_pb.js";
import { SDK_VERSION } from "./version.js";
var FfiClientEvent = /* @__PURE__ */ ((FfiClientEvent2) => {
  FfiClientEvent2["FfiEvent"] = "ffi_event";
  return FfiClientEvent2;
})(FfiClientEvent || {});
class FfiClient extends EventEmitter {
  /** @internal */
  static get instance() {
    if (!globalThis._ffiClientInstance) {
      globalThis._ffiClientInstance = new FfiClient();
    }
    return globalThis._ffiClientInstance;
  }
  constructor() {
    super();
    this.setMaxListeners(0);
    livekitInitialize(
      (event_data) => {
        const event = FfiEvent.fromBinary(event_data);
        this.emit("ffi_event" /* FfiEvent */, event);
      },
      true,
      SDK_VERSION
    );
  }
  request(req) {
    const request = new FfiRequest(req);
    const req_data = request.toBinary();
    const res_data = livekitFfiRequest(req_data);
    return FfiResponse.fromBinary(res_data).message.value;
  }
  copyBuffer(ptr, len) {
    return livekitCopyBuffer(ptr, len);
  }
  retrievePtr(data) {
    return livekitRetrievePtr(data);
  }
  async waitFor(predicate) {
    return new Promise((resolve) => {
      const listener = (ev) => {
        if (predicate(ev)) {
          this.off("ffi_event" /* FfiEvent */, listener);
          resolve(ev.message.value);
        }
      };
      this.on("ffi_event" /* FfiEvent */, listener);
    });
  }
}
export {
  FfiClient,
  FfiClientEvent,
  FfiHandle,
  FfiRequest,
  livekitDispose as dispose
};
//# sourceMappingURL=ffi_client.js.map