import { Message, proto2 } from "@bufbuild/protobuf";
const _FfiOwnedHandle = class _FfiOwnedHandle extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _FfiOwnedHandle().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _FfiOwnedHandle().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _FfiOwnedHandle().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_FfiOwnedHandle, a, b);
  }
};
_FfiOwnedHandle.runtime = proto2;
_FfiOwnedHandle.typeName = "livekit.proto.FfiOwnedHandle";
_FfiOwnedHandle.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "id", kind: "scalar", T: 4, req: true }
]);
let FfiOwnedHandle = _FfiOwnedHandle;
export {
  FfiOwnedHandle
};
//# sourceMappingURL=handle_pb.js.map