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
var rpc_pb_exports = {};
__export(rpc_pb_exports, {
  PerformRpcCallback: () => PerformRpcCallback,
  PerformRpcRequest: () => PerformRpcRequest,
  PerformRpcResponse: () => PerformRpcResponse,
  RegisterRpcMethodRequest: () => RegisterRpcMethodRequest,
  RegisterRpcMethodResponse: () => RegisterRpcMethodResponse,
  RpcError: () => RpcError,
  RpcMethodInvocationEvent: () => RpcMethodInvocationEvent,
  RpcMethodInvocationResponseRequest: () => RpcMethodInvocationResponseRequest,
  RpcMethodInvocationResponseResponse: () => RpcMethodInvocationResponseResponse,
  UnregisterRpcMethodRequest: () => UnregisterRpcMethodRequest,
  UnregisterRpcMethodResponse: () => UnregisterRpcMethodResponse
});
module.exports = __toCommonJS(rpc_pb_exports);
var import_protobuf = require("@bufbuild/protobuf");
const _RpcError = class _RpcError extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RpcError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RpcError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RpcError().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_RpcError, a, b);
  }
};
_RpcError.runtime = import_protobuf.proto2;
_RpcError.typeName = "livekit.proto.RpcError";
_RpcError.fields = import_protobuf.proto2.util.newFieldList(() => [
  { no: 1, name: "code", kind: "scalar", T: 13, req: true },
  { no: 2, name: "message", kind: "scalar", T: 9, req: true },
  { no: 3, name: "data", kind: "scalar", T: 9, opt: true }
]);
let RpcError = _RpcError;
const _PerformRpcRequest = class _PerformRpcRequest extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _PerformRpcRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _PerformRpcRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _PerformRpcRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_PerformRpcRequest, a, b);
  }
};
_PerformRpcRequest.runtime = import_protobuf.proto2;
_PerformRpcRequest.typeName = "livekit.proto.PerformRpcRequest";
_PerformRpcRequest.fields = import_protobuf.proto2.util.newFieldList(() => [
  { no: 1, name: "local_participant_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "destination_identity", kind: "scalar", T: 9, req: true },
  { no: 3, name: "method", kind: "scalar", T: 9, req: true },
  { no: 4, name: "payload", kind: "scalar", T: 9, req: true },
  { no: 5, name: "response_timeout_ms", kind: "scalar", T: 13, opt: true }
]);
let PerformRpcRequest = _PerformRpcRequest;
const _RegisterRpcMethodRequest = class _RegisterRpcMethodRequest extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RegisterRpcMethodRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RegisterRpcMethodRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RegisterRpcMethodRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_RegisterRpcMethodRequest, a, b);
  }
};
_RegisterRpcMethodRequest.runtime = import_protobuf.proto2;
_RegisterRpcMethodRequest.typeName = "livekit.proto.RegisterRpcMethodRequest";
_RegisterRpcMethodRequest.fields = import_protobuf.proto2.util.newFieldList(() => [
  { no: 1, name: "local_participant_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "method", kind: "scalar", T: 9, req: true }
]);
let RegisterRpcMethodRequest = _RegisterRpcMethodRequest;
const _UnregisterRpcMethodRequest = class _UnregisterRpcMethodRequest extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _UnregisterRpcMethodRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _UnregisterRpcMethodRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _UnregisterRpcMethodRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_UnregisterRpcMethodRequest, a, b);
  }
};
_UnregisterRpcMethodRequest.runtime = import_protobuf.proto2;
_UnregisterRpcMethodRequest.typeName = "livekit.proto.UnregisterRpcMethodRequest";
_UnregisterRpcMethodRequest.fields = import_protobuf.proto2.util.newFieldList(() => [
  { no: 1, name: "local_participant_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "method", kind: "scalar", T: 9, req: true }
]);
let UnregisterRpcMethodRequest = _UnregisterRpcMethodRequest;
const _RpcMethodInvocationResponseRequest = class _RpcMethodInvocationResponseRequest extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RpcMethodInvocationResponseRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RpcMethodInvocationResponseRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RpcMethodInvocationResponseRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_RpcMethodInvocationResponseRequest, a, b);
  }
};
_RpcMethodInvocationResponseRequest.runtime = import_protobuf.proto2;
_RpcMethodInvocationResponseRequest.typeName = "livekit.proto.RpcMethodInvocationResponseRequest";
_RpcMethodInvocationResponseRequest.fields = import_protobuf.proto2.util.newFieldList(() => [
  { no: 1, name: "local_participant_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "invocation_id", kind: "scalar", T: 4, req: true },
  { no: 3, name: "payload", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "error", kind: "message", T: RpcError, opt: true }
]);
let RpcMethodInvocationResponseRequest = _RpcMethodInvocationResponseRequest;
const _PerformRpcResponse = class _PerformRpcResponse extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _PerformRpcResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _PerformRpcResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _PerformRpcResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_PerformRpcResponse, a, b);
  }
};
_PerformRpcResponse.runtime = import_protobuf.proto2;
_PerformRpcResponse.typeName = "livekit.proto.PerformRpcResponse";
_PerformRpcResponse.fields = import_protobuf.proto2.util.newFieldList(() => [
  { no: 1, name: "async_id", kind: "scalar", T: 4, req: true }
]);
let PerformRpcResponse = _PerformRpcResponse;
const _RegisterRpcMethodResponse = class _RegisterRpcMethodResponse extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RegisterRpcMethodResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RegisterRpcMethodResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RegisterRpcMethodResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_RegisterRpcMethodResponse, a, b);
  }
};
_RegisterRpcMethodResponse.runtime = import_protobuf.proto2;
_RegisterRpcMethodResponse.typeName = "livekit.proto.RegisterRpcMethodResponse";
_RegisterRpcMethodResponse.fields = import_protobuf.proto2.util.newFieldList(() => []);
let RegisterRpcMethodResponse = _RegisterRpcMethodResponse;
const _UnregisterRpcMethodResponse = class _UnregisterRpcMethodResponse extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _UnregisterRpcMethodResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _UnregisterRpcMethodResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _UnregisterRpcMethodResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_UnregisterRpcMethodResponse, a, b);
  }
};
_UnregisterRpcMethodResponse.runtime = import_protobuf.proto2;
_UnregisterRpcMethodResponse.typeName = "livekit.proto.UnregisterRpcMethodResponse";
_UnregisterRpcMethodResponse.fields = import_protobuf.proto2.util.newFieldList(() => []);
let UnregisterRpcMethodResponse = _UnregisterRpcMethodResponse;
const _RpcMethodInvocationResponseResponse = class _RpcMethodInvocationResponseResponse extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RpcMethodInvocationResponseResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RpcMethodInvocationResponseResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RpcMethodInvocationResponseResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_RpcMethodInvocationResponseResponse, a, b);
  }
};
_RpcMethodInvocationResponseResponse.runtime = import_protobuf.proto2;
_RpcMethodInvocationResponseResponse.typeName = "livekit.proto.RpcMethodInvocationResponseResponse";
_RpcMethodInvocationResponseResponse.fields = import_protobuf.proto2.util.newFieldList(() => [
  { no: 1, name: "error", kind: "scalar", T: 9, opt: true }
]);
let RpcMethodInvocationResponseResponse = _RpcMethodInvocationResponseResponse;
const _PerformRpcCallback = class _PerformRpcCallback extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _PerformRpcCallback().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _PerformRpcCallback().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _PerformRpcCallback().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_PerformRpcCallback, a, b);
  }
};
_PerformRpcCallback.runtime = import_protobuf.proto2;
_PerformRpcCallback.typeName = "livekit.proto.PerformRpcCallback";
_PerformRpcCallback.fields = import_protobuf.proto2.util.newFieldList(() => [
  { no: 1, name: "async_id", kind: "scalar", T: 4, req: true },
  { no: 2, name: "payload", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "error", kind: "message", T: RpcError, opt: true }
]);
let PerformRpcCallback = _PerformRpcCallback;
const _RpcMethodInvocationEvent = class _RpcMethodInvocationEvent extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RpcMethodInvocationEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RpcMethodInvocationEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RpcMethodInvocationEvent().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_RpcMethodInvocationEvent, a, b);
  }
};
_RpcMethodInvocationEvent.runtime = import_protobuf.proto2;
_RpcMethodInvocationEvent.typeName = "livekit.proto.RpcMethodInvocationEvent";
_RpcMethodInvocationEvent.fields = import_protobuf.proto2.util.newFieldList(() => [
  { no: 1, name: "local_participant_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "invocation_id", kind: "scalar", T: 4, req: true },
  { no: 3, name: "method", kind: "scalar", T: 9, req: true },
  { no: 4, name: "request_id", kind: "scalar", T: 9, req: true },
  { no: 5, name: "caller_identity", kind: "scalar", T: 9, req: true },
  { no: 6, name: "payload", kind: "scalar", T: 9, req: true },
  { no: 7, name: "response_timeout_ms", kind: "scalar", T: 13, req: true }
]);
let RpcMethodInvocationEvent = _RpcMethodInvocationEvent;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PerformRpcCallback,
  PerformRpcRequest,
  PerformRpcResponse,
  RegisterRpcMethodRequest,
  RegisterRpcMethodResponse,
  RpcError,
  RpcMethodInvocationEvent,
  RpcMethodInvocationResponseRequest,
  RpcMethodInvocationResponseResponse,
  UnregisterRpcMethodRequest,
  UnregisterRpcMethodResponse
});
//# sourceMappingURL=rpc_pb.cjs.map