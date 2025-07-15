import { Message, proto2 } from "@bufbuild/protobuf";
const _EnableRemoteTrackPublicationRequest = class _EnableRemoteTrackPublicationRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
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
    return proto2.util.equals(_EnableRemoteTrackPublicationRequest, a, b);
  }
};
_EnableRemoteTrackPublicationRequest.runtime = proto2;
_EnableRemoteTrackPublicationRequest.typeName = "livekit.proto.EnableRemoteTrackPublicationRequest";
_EnableRemoteTrackPublicationRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "track_publication_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "enabled", kind: "scalar", T: 8, req: true }
]);
let EnableRemoteTrackPublicationRequest = _EnableRemoteTrackPublicationRequest;
const _EnableRemoteTrackPublicationResponse = class _EnableRemoteTrackPublicationResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
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
    return proto2.util.equals(_EnableRemoteTrackPublicationResponse, a, b);
  }
};
_EnableRemoteTrackPublicationResponse.runtime = proto2;
_EnableRemoteTrackPublicationResponse.typeName = "livekit.proto.EnableRemoteTrackPublicationResponse";
_EnableRemoteTrackPublicationResponse.fields = proto2.util.newFieldList(() => []);
let EnableRemoteTrackPublicationResponse = _EnableRemoteTrackPublicationResponse;
const _UpdateRemoteTrackPublicationDimensionRequest = class _UpdateRemoteTrackPublicationDimensionRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
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
    return proto2.util.equals(_UpdateRemoteTrackPublicationDimensionRequest, a, b);
  }
};
_UpdateRemoteTrackPublicationDimensionRequest.runtime = proto2;
_UpdateRemoteTrackPublicationDimensionRequest.typeName = "livekit.proto.UpdateRemoteTrackPublicationDimensionRequest";
_UpdateRemoteTrackPublicationDimensionRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "track_publication_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "width", kind: "scalar", T: 13, req: true },
  { no: 3, name: "height", kind: "scalar", T: 13, req: true }
]);
let UpdateRemoteTrackPublicationDimensionRequest = _UpdateRemoteTrackPublicationDimensionRequest;
const _UpdateRemoteTrackPublicationDimensionResponse = class _UpdateRemoteTrackPublicationDimensionResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
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
    return proto2.util.equals(_UpdateRemoteTrackPublicationDimensionResponse, a, b);
  }
};
_UpdateRemoteTrackPublicationDimensionResponse.runtime = proto2;
_UpdateRemoteTrackPublicationDimensionResponse.typeName = "livekit.proto.UpdateRemoteTrackPublicationDimensionResponse";
_UpdateRemoteTrackPublicationDimensionResponse.fields = proto2.util.newFieldList(() => []);
let UpdateRemoteTrackPublicationDimensionResponse = _UpdateRemoteTrackPublicationDimensionResponse;
export {
  EnableRemoteTrackPublicationRequest,
  EnableRemoteTrackPublicationResponse,
  UpdateRemoteTrackPublicationDimensionRequest,
  UpdateRemoteTrackPublicationDimensionResponse
};
//# sourceMappingURL=track_publication_pb.js.map