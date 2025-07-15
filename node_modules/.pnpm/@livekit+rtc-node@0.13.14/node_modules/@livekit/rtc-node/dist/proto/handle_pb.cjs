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
var handle_pb_exports = {};
__export(handle_pb_exports, {
  FfiOwnedHandle: () => FfiOwnedHandle
});
module.exports = __toCommonJS(handle_pb_exports);
var import_protobuf = require("@bufbuild/protobuf");
const _FfiOwnedHandle = class _FfiOwnedHandle extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
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
    return import_protobuf.proto2.util.equals(_FfiOwnedHandle, a, b);
  }
};
_FfiOwnedHandle.runtime = import_protobuf.proto2;
_FfiOwnedHandle.typeName = "livekit.proto.FfiOwnedHandle";
_FfiOwnedHandle.fields = import_protobuf.proto2.util.newFieldList(() => [
  { no: 1, name: "id", kind: "scalar", T: 4, req: true }
]);
let FfiOwnedHandle = _FfiOwnedHandle;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FfiOwnedHandle
});
//# sourceMappingURL=handle_pb.cjs.map