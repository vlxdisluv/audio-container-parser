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
var track_publication_exports = {};
__export(track_publication_exports, {
  LocalTrackPublication: () => LocalTrackPublication,
  RemoteTrackPublication: () => RemoteTrackPublication,
  TrackPublication: () => TrackPublication
});
module.exports = __toCommonJS(track_publication_exports);
var import_ffi_client = require("./ffi_client.cjs");
var import_native = require("./napi/native.cjs");
var import_room_pb = require("./proto/room_pb.cjs");
class TrackPublication {
  constructor(ownedInfo) {
    this.info = ownedInfo.info;
    this.ffiHandle = new import_native.FfiHandle(ownedInfo.handle.id);
  }
  get sid() {
    var _a;
    return (_a = this.info) == null ? void 0 : _a.sid;
  }
  get name() {
    var _a;
    return (_a = this.info) == null ? void 0 : _a.name;
  }
  get kind() {
    var _a;
    return (_a = this.info) == null ? void 0 : _a.kind;
  }
  get source() {
    var _a;
    return (_a = this.info) == null ? void 0 : _a.source;
  }
  get simulcasted() {
    var _a;
    return (_a = this.info) == null ? void 0 : _a.simulcasted;
  }
  get width() {
    var _a;
    return (_a = this.info) == null ? void 0 : _a.width;
  }
  get height() {
    var _a;
    return (_a = this.info) == null ? void 0 : _a.height;
  }
  get mimeType() {
    var _a;
    return (_a = this.info) == null ? void 0 : _a.mimeType;
  }
  get muted() {
    var _a;
    return (_a = this.info) == null ? void 0 : _a.muted;
  }
  get encryptionType() {
    var _a;
    return (_a = this.info) == null ? void 0 : _a.encryptionType;
  }
}
class LocalTrackPublication extends TrackPublication {
  constructor(ownedInfo) {
    super(ownedInfo);
    this.firstSubscriptionResolver = null;
    this.firstSubscription = new Promise((resolve) => {
      this.firstSubscriptionResolver = resolve;
    });
  }
  async waitForSubscription() {
    await this.firstSubscription;
  }
  /** @internal */
  resolveFirstSubscription() {
    if (this.firstSubscriptionResolver) {
      this.firstSubscriptionResolver();
      this.firstSubscriptionResolver = null;
    }
  }
}
class RemoteTrackPublication extends TrackPublication {
  constructor(ownedInfo) {
    super(ownedInfo);
    this.subscribed = false;
  }
  setSubscribed(subscribed) {
    const req = new import_room_pb.SetSubscribedRequest({
      subscribe: subscribed,
      publicationHandle: this.ffiHandle.handle
    });
    import_ffi_client.FfiClient.instance.request({
      message: { case: "setSubscribed", value: req }
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LocalTrackPublication,
  RemoteTrackPublication,
  TrackPublication
});
//# sourceMappingURL=track_publication.cjs.map