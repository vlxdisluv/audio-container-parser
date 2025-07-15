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
var track_publication_pb_exports = {};
__export(track_publication_pb_exports, {
  EnableRemoteTrackPublicationRequest: () => EnableRemoteTrackPublicationRequest,
  EnableRemoteTrackPublicationResponse: () => EnableRemoteTrackPublicationResponse,
  UpdateRemoteTrackPublicationDimensionRequest: () => UpdateRemoteTrackPublicationDimensionRequest,
  UpdateRemoteTrackPublicationDimensionResponse: () => UpdateRemoteTrackPublicationDimensionResponse
});
module.exports = __toCommonJS(track_publication_pb_exports);
var import_protobuf = require("@bufbuild/protobuf");
const _EnableRemoteTrackPublicationRequest = class _EnableRemoteTrackPublicationRequest extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _EnableRemoteTrackPublicationRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _EnableRemoteTrackPublicationRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _EnableRemoteTrackPublicationRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_EnableRemoteTrackPublicationRequest, a, b);
  }
};
_EnableRemoteTrackPublicationRequest.runtime = import_protobuf.proto2;
_EnableRemoteTrackPublicationRequest.typeName = "livekit.proto.EnableRemoteTrackPublicationRequest";
_EnableRemoteTrackPublicationRequest.fields = import_protobuf.proto2.util.newFieldList(() => [
  { no: 1, name: "track_publication_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "enabled", kind: "scalar", T: 8, req: true }
]);
let EnableRemoteTrackPublicationRequest = _EnableRemoteTrackPublicationRequest;
const _EnableRemoteTrackPublicationResponse = class _EnableRemoteTrackPublicationResponse extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _EnableRemoteTrackPublicationResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _EnableRemoteTrackPublicationResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _EnableRemoteTrackPublicationResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_EnableRemoteTrackPublicationResponse, a, b);
  }
};
_EnableRemoteTrackPublicationResponse.runtime = import_protobuf.proto2;
_EnableRemoteTrackPublicationResponse.typeName = "livekit.proto.EnableRemoteTrackPublicationResponse";
_EnableRemoteTrackPublicationResponse.fields = import_protobuf.proto2.util.newFieldList(() => []);
let EnableRemoteTrackPublicationResponse = _EnableRemoteTrackPublicationResponse;
const _UpdateRemoteTrackPublicationDimensionRequest = class _UpdateRemoteTrackPublicationDimensionRequest extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _UpdateRemoteTrackPublicationDimensionRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _UpdateRemoteTrackPublicationDimensionRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _UpdateRemoteTrackPublicationDimensionRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_UpdateRemoteTrackPublicationDimensionRequest, a, b);
  }
};
_UpdateRemoteTrackPublicationDimensionRequest.runtime = import_protobuf.proto2;
_UpdateRemoteTrackPublicationDimensionRequest.typeName = "livekit.proto.UpdateRemoteTrackPublicationDimensionRequest";
_UpdateRemoteTrackPublicationDimensionRequest.fields = import_protobuf.proto2.util.newFieldList(() => [
  { no: 1, name: "track_publication_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "width", kind: "scalar", T: 13, req: true },
  { no: 3, name: "height", kind: "scalar", T: 13, req: true }
]);
let UpdateRemoteTrackPublicationDimensionRequest = _UpdateRemoteTrackPublicationDimensionRequest;
const _UpdateRemoteTrackPublicationDimensionResponse = class _UpdateRemoteTrackPublicationDimensionResponse extends import_protobuf.Message {
  constructor(data) {
    super();
    import_protobuf.proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _UpdateRemoteTrackPublicationDimensionResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _UpdateRemoteTrackPublicationDimensionResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _UpdateRemoteTrackPublicationDimensionResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return import_protobuf.proto2.util.equals(_UpdateRemoteTrackPublicationDimensionResponse, a, b);
  }
};
_UpdateRemoteTrackPublicationDimensionResponse.runtime = import_protobuf.proto2;
_UpdateRemoteTrackPublicationDimensionResponse.typeName = "livekit.proto.UpdateRemoteTrackPublicationDimensionResponse";
_UpdateRemoteTrackPublicationDimensionResponse.fields = import_protobuf.proto2.util.newFieldList(() => []);
let UpdateRemoteTrackPublicationDimensionResponse = _UpdateRemoteTrackPublicationDimensionResponse;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EnableRemoteTrackPublicationRequest,
  EnableRemoteTrackPublicationResponse,
  UpdateRemoteTrackPublicationDimensionRequest,
  UpdateRemoteTrackPublicationDimensionResponse
});
//# sourceMappingURL=track_publication_pb.cjs.map