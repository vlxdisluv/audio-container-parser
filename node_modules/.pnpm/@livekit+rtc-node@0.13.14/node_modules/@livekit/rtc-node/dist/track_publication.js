import { FfiClient } from "./ffi_client.js";
import { FfiHandle } from "./napi/native.js";
import { SetSubscribedRequest } from "./proto/room_pb.js";
class TrackPublication {
  constructor(ownedInfo) {
    this.info = ownedInfo.info;
    this.ffiHandle = new FfiHandle(ownedInfo.handle.id);
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
    const req = new SetSubscribedRequest({
      subscribe: subscribed,
      publicationHandle: this.ffiHandle.handle
    });
    FfiClient.instance.request({
      message: { case: "setSubscribed", value: req }
    });
  }
}
export {
  LocalTrackPublication,
  RemoteTrackPublication,
  TrackPublication
};
//# sourceMappingURL=track_publication.js.map