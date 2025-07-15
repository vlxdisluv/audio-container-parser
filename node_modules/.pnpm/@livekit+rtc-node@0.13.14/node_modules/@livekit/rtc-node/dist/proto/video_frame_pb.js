import { Message, proto2 } from "@bufbuild/protobuf";
import { TrackSource } from "./track_pb.js";
import { FfiOwnedHandle } from "./handle_pb.js";
var VideoCodec = /* @__PURE__ */ ((VideoCodec2) => {
  VideoCodec2[VideoCodec2["VP8"] = 0] = "VP8";
  VideoCodec2[VideoCodec2["H264"] = 1] = "H264";
  VideoCodec2[VideoCodec2["AV1"] = 2] = "AV1";
  VideoCodec2[VideoCodec2["VP9"] = 3] = "VP9";
  return VideoCodec2;
})(VideoCodec || {});
proto2.util.setEnumType(VideoCodec, "livekit.proto.VideoCodec", [
  { no: 0, name: "VP8" },
  { no: 1, name: "H264" },
  { no: 2, name: "AV1" },
  { no: 3, name: "VP9" }
]);
var VideoRotation = /* @__PURE__ */ ((VideoRotation2) => {
  VideoRotation2[VideoRotation2["VIDEO_ROTATION_0"] = 0] = "VIDEO_ROTATION_0";
  VideoRotation2[VideoRotation2["VIDEO_ROTATION_90"] = 1] = "VIDEO_ROTATION_90";
  VideoRotation2[VideoRotation2["VIDEO_ROTATION_180"] = 2] = "VIDEO_ROTATION_180";
  VideoRotation2[VideoRotation2["VIDEO_ROTATION_270"] = 3] = "VIDEO_ROTATION_270";
  return VideoRotation2;
})(VideoRotation || {});
proto2.util.setEnumType(VideoRotation, "livekit.proto.VideoRotation", [
  { no: 0, name: "VIDEO_ROTATION_0" },
  { no: 1, name: "VIDEO_ROTATION_90" },
  { no: 2, name: "VIDEO_ROTATION_180" },
  { no: 3, name: "VIDEO_ROTATION_270" }
]);
var VideoBufferType = /* @__PURE__ */ ((VideoBufferType2) => {
  VideoBufferType2[VideoBufferType2["RGBA"] = 0] = "RGBA";
  VideoBufferType2[VideoBufferType2["ABGR"] = 1] = "ABGR";
  VideoBufferType2[VideoBufferType2["ARGB"] = 2] = "ARGB";
  VideoBufferType2[VideoBufferType2["BGRA"] = 3] = "BGRA";
  VideoBufferType2[VideoBufferType2["RGB24"] = 4] = "RGB24";
  VideoBufferType2[VideoBufferType2["I420"] = 5] = "I420";
  VideoBufferType2[VideoBufferType2["I420A"] = 6] = "I420A";
  VideoBufferType2[VideoBufferType2["I422"] = 7] = "I422";
  VideoBufferType2[VideoBufferType2["I444"] = 8] = "I444";
  VideoBufferType2[VideoBufferType2["I010"] = 9] = "I010";
  VideoBufferType2[VideoBufferType2["NV12"] = 10] = "NV12";
  return VideoBufferType2;
})(VideoBufferType || {});
proto2.util.setEnumType(VideoBufferType, "livekit.proto.VideoBufferType", [
  { no: 0, name: "RGBA" },
  { no: 1, name: "ABGR" },
  { no: 2, name: "ARGB" },
  { no: 3, name: "BGRA" },
  { no: 4, name: "RGB24" },
  { no: 5, name: "I420" },
  { no: 6, name: "I420A" },
  { no: 7, name: "I422" },
  { no: 8, name: "I444" },
  { no: 9, name: "I010" },
  { no: 10, name: "NV12" }
]);
var VideoStreamType = /* @__PURE__ */ ((VideoStreamType2) => {
  VideoStreamType2[VideoStreamType2["VIDEO_STREAM_NATIVE"] = 0] = "VIDEO_STREAM_NATIVE";
  VideoStreamType2[VideoStreamType2["VIDEO_STREAM_WEBGL"] = 1] = "VIDEO_STREAM_WEBGL";
  VideoStreamType2[VideoStreamType2["VIDEO_STREAM_HTML"] = 2] = "VIDEO_STREAM_HTML";
  return VideoStreamType2;
})(VideoStreamType || {});
proto2.util.setEnumType(VideoStreamType, "livekit.proto.VideoStreamType", [
  { no: 0, name: "VIDEO_STREAM_NATIVE" },
  { no: 1, name: "VIDEO_STREAM_WEBGL" },
  { no: 2, name: "VIDEO_STREAM_HTML" }
]);
var VideoSourceType = /* @__PURE__ */ ((VideoSourceType2) => {
  VideoSourceType2[VideoSourceType2["VIDEO_SOURCE_NATIVE"] = 0] = "VIDEO_SOURCE_NATIVE";
  return VideoSourceType2;
})(VideoSourceType || {});
proto2.util.setEnumType(VideoSourceType, "livekit.proto.VideoSourceType", [
  { no: 0, name: "VIDEO_SOURCE_NATIVE" }
]);
const _NewVideoStreamRequest = class _NewVideoStreamRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _NewVideoStreamRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _NewVideoStreamRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _NewVideoStreamRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_NewVideoStreamRequest, a, b);
  }
};
_NewVideoStreamRequest.runtime = proto2;
_NewVideoStreamRequest.typeName = "livekit.proto.NewVideoStreamRequest";
_NewVideoStreamRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "track_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "type", kind: "enum", T: proto2.getEnumType(VideoStreamType), req: true },
  { no: 3, name: "format", kind: "enum", T: proto2.getEnumType(VideoBufferType), opt: true },
  { no: 4, name: "normalize_stride", kind: "scalar", T: 8, opt: true }
]);
let NewVideoStreamRequest = _NewVideoStreamRequest;
const _NewVideoStreamResponse = class _NewVideoStreamResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _NewVideoStreamResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _NewVideoStreamResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _NewVideoStreamResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_NewVideoStreamResponse, a, b);
  }
};
_NewVideoStreamResponse.runtime = proto2;
_NewVideoStreamResponse.typeName = "livekit.proto.NewVideoStreamResponse";
_NewVideoStreamResponse.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "stream", kind: "message", T: OwnedVideoStream, req: true }
]);
let NewVideoStreamResponse = _NewVideoStreamResponse;
const _VideoStreamFromParticipantRequest = class _VideoStreamFromParticipantRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoStreamFromParticipantRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoStreamFromParticipantRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoStreamFromParticipantRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoStreamFromParticipantRequest, a, b);
  }
};
_VideoStreamFromParticipantRequest.runtime = proto2;
_VideoStreamFromParticipantRequest.typeName = "livekit.proto.VideoStreamFromParticipantRequest";
_VideoStreamFromParticipantRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "participant_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "type", kind: "enum", T: proto2.getEnumType(VideoStreamType), req: true },
  { no: 3, name: "track_source", kind: "enum", T: proto2.getEnumType(TrackSource), req: true },
  { no: 4, name: "format", kind: "enum", T: proto2.getEnumType(VideoBufferType), opt: true },
  { no: 5, name: "normalize_stride", kind: "scalar", T: 8, opt: true }
]);
let VideoStreamFromParticipantRequest = _VideoStreamFromParticipantRequest;
const _VideoStreamFromParticipantResponse = class _VideoStreamFromParticipantResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoStreamFromParticipantResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoStreamFromParticipantResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoStreamFromParticipantResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoStreamFromParticipantResponse, a, b);
  }
};
_VideoStreamFromParticipantResponse.runtime = proto2;
_VideoStreamFromParticipantResponse.typeName = "livekit.proto.VideoStreamFromParticipantResponse";
_VideoStreamFromParticipantResponse.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "stream", kind: "message", T: OwnedVideoStream, req: true }
]);
let VideoStreamFromParticipantResponse = _VideoStreamFromParticipantResponse;
const _NewVideoSourceRequest = class _NewVideoSourceRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _NewVideoSourceRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _NewVideoSourceRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _NewVideoSourceRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_NewVideoSourceRequest, a, b);
  }
};
_NewVideoSourceRequest.runtime = proto2;
_NewVideoSourceRequest.typeName = "livekit.proto.NewVideoSourceRequest";
_NewVideoSourceRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "type", kind: "enum", T: proto2.getEnumType(VideoSourceType), req: true },
  { no: 2, name: "resolution", kind: "message", T: VideoSourceResolution, req: true }
]);
let NewVideoSourceRequest = _NewVideoSourceRequest;
const _NewVideoSourceResponse = class _NewVideoSourceResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _NewVideoSourceResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _NewVideoSourceResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _NewVideoSourceResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_NewVideoSourceResponse, a, b);
  }
};
_NewVideoSourceResponse.runtime = proto2;
_NewVideoSourceResponse.typeName = "livekit.proto.NewVideoSourceResponse";
_NewVideoSourceResponse.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: OwnedVideoSource, req: true }
]);
let NewVideoSourceResponse = _NewVideoSourceResponse;
const _CaptureVideoFrameRequest = class _CaptureVideoFrameRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CaptureVideoFrameRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CaptureVideoFrameRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CaptureVideoFrameRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_CaptureVideoFrameRequest, a, b);
  }
};
_CaptureVideoFrameRequest.runtime = proto2;
_CaptureVideoFrameRequest.typeName = "livekit.proto.CaptureVideoFrameRequest";
_CaptureVideoFrameRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "source_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "buffer", kind: "message", T: VideoBufferInfo, req: true },
  { no: 3, name: "timestamp_us", kind: "scalar", T: 3, req: true },
  { no: 4, name: "rotation", kind: "enum", T: proto2.getEnumType(VideoRotation), req: true }
]);
let CaptureVideoFrameRequest = _CaptureVideoFrameRequest;
const _CaptureVideoFrameResponse = class _CaptureVideoFrameResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CaptureVideoFrameResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CaptureVideoFrameResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CaptureVideoFrameResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_CaptureVideoFrameResponse, a, b);
  }
};
_CaptureVideoFrameResponse.runtime = proto2;
_CaptureVideoFrameResponse.typeName = "livekit.proto.CaptureVideoFrameResponse";
_CaptureVideoFrameResponse.fields = proto2.util.newFieldList(() => []);
let CaptureVideoFrameResponse = _CaptureVideoFrameResponse;
const _VideoConvertRequest = class _VideoConvertRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoConvertRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoConvertRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoConvertRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoConvertRequest, a, b);
  }
};
_VideoConvertRequest.runtime = proto2;
_VideoConvertRequest.typeName = "livekit.proto.VideoConvertRequest";
_VideoConvertRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "flip_y", kind: "scalar", T: 8, opt: true },
  { no: 2, name: "buffer", kind: "message", T: VideoBufferInfo, req: true },
  { no: 3, name: "dst_type", kind: "enum", T: proto2.getEnumType(VideoBufferType), req: true }
]);
let VideoConvertRequest = _VideoConvertRequest;
const _VideoConvertResponse = class _VideoConvertResponse extends Message {
  constructor(data) {
    super();
    /**
     * @generated from oneof livekit.proto.VideoConvertResponse.message
     */
    this.message = { case: void 0 };
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoConvertResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoConvertResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoConvertResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoConvertResponse, a, b);
  }
};
_VideoConvertResponse.runtime = proto2;
_VideoConvertResponse.typeName = "livekit.proto.VideoConvertResponse";
_VideoConvertResponse.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "error", kind: "scalar", T: 9, oneof: "message" },
  { no: 2, name: "buffer", kind: "message", T: OwnedVideoBuffer, oneof: "message" }
]);
let VideoConvertResponse = _VideoConvertResponse;
const _VideoResolution = class _VideoResolution extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoResolution().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoResolution().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoResolution().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoResolution, a, b);
  }
};
_VideoResolution.runtime = proto2;
_VideoResolution.typeName = "livekit.proto.VideoResolution";
_VideoResolution.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "width", kind: "scalar", T: 13, req: true },
  { no: 2, name: "height", kind: "scalar", T: 13, req: true },
  { no: 3, name: "frame_rate", kind: "scalar", T: 1, req: true }
]);
let VideoResolution = _VideoResolution;
const _VideoBufferInfo = class _VideoBufferInfo extends Message {
  constructor(data) {
    super();
    /**
     * @generated from field: repeated livekit.proto.VideoBufferInfo.ComponentInfo components = 7;
     */
    this.components = [];
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoBufferInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoBufferInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoBufferInfo().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoBufferInfo, a, b);
  }
};
_VideoBufferInfo.runtime = proto2;
_VideoBufferInfo.typeName = "livekit.proto.VideoBufferInfo";
_VideoBufferInfo.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "type", kind: "enum", T: proto2.getEnumType(VideoBufferType), req: true },
  { no: 2, name: "width", kind: "scalar", T: 13, req: true },
  { no: 3, name: "height", kind: "scalar", T: 13, req: true },
  { no: 4, name: "data_ptr", kind: "scalar", T: 4, req: true },
  { no: 6, name: "stride", kind: "scalar", T: 13, opt: true },
  { no: 7, name: "components", kind: "message", T: VideoBufferInfo_ComponentInfo, repeated: true }
]);
let VideoBufferInfo = _VideoBufferInfo;
const _VideoBufferInfo_ComponentInfo = class _VideoBufferInfo_ComponentInfo extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoBufferInfo_ComponentInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoBufferInfo_ComponentInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoBufferInfo_ComponentInfo().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoBufferInfo_ComponentInfo, a, b);
  }
};
_VideoBufferInfo_ComponentInfo.runtime = proto2;
_VideoBufferInfo_ComponentInfo.typeName = "livekit.proto.VideoBufferInfo.ComponentInfo";
_VideoBufferInfo_ComponentInfo.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "data_ptr", kind: "scalar", T: 4, req: true },
  { no: 2, name: "stride", kind: "scalar", T: 13, req: true },
  { no: 3, name: "size", kind: "scalar", T: 13, req: true }
]);
let VideoBufferInfo_ComponentInfo = _VideoBufferInfo_ComponentInfo;
const _OwnedVideoBuffer = class _OwnedVideoBuffer extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _OwnedVideoBuffer().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _OwnedVideoBuffer().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _OwnedVideoBuffer().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_OwnedVideoBuffer, a, b);
  }
};
_OwnedVideoBuffer.runtime = proto2;
_OwnedVideoBuffer.typeName = "livekit.proto.OwnedVideoBuffer";
_OwnedVideoBuffer.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "handle", kind: "message", T: FfiOwnedHandle, req: true },
  { no: 2, name: "info", kind: "message", T: VideoBufferInfo, req: true }
]);
let OwnedVideoBuffer = _OwnedVideoBuffer;
const _VideoStreamInfo = class _VideoStreamInfo extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoStreamInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoStreamInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoStreamInfo().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoStreamInfo, a, b);
  }
};
_VideoStreamInfo.runtime = proto2;
_VideoStreamInfo.typeName = "livekit.proto.VideoStreamInfo";
_VideoStreamInfo.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "type", kind: "enum", T: proto2.getEnumType(VideoStreamType), req: true }
]);
let VideoStreamInfo = _VideoStreamInfo;
const _OwnedVideoStream = class _OwnedVideoStream extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _OwnedVideoStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _OwnedVideoStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _OwnedVideoStream().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_OwnedVideoStream, a, b);
  }
};
_OwnedVideoStream.runtime = proto2;
_OwnedVideoStream.typeName = "livekit.proto.OwnedVideoStream";
_OwnedVideoStream.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "handle", kind: "message", T: FfiOwnedHandle, req: true },
  { no: 2, name: "info", kind: "message", T: VideoStreamInfo, req: true }
]);
let OwnedVideoStream = _OwnedVideoStream;
const _VideoStreamEvent = class _VideoStreamEvent extends Message {
  constructor(data) {
    super();
    /**
     * @generated from oneof livekit.proto.VideoStreamEvent.message
     */
    this.message = { case: void 0 };
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoStreamEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoStreamEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoStreamEvent().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoStreamEvent, a, b);
  }
};
_VideoStreamEvent.runtime = proto2;
_VideoStreamEvent.typeName = "livekit.proto.VideoStreamEvent";
_VideoStreamEvent.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "stream_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "frame_received", kind: "message", T: VideoFrameReceived, oneof: "message" },
  { no: 3, name: "eos", kind: "message", T: VideoStreamEOS, oneof: "message" }
]);
let VideoStreamEvent = _VideoStreamEvent;
const _VideoFrameReceived = class _VideoFrameReceived extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoFrameReceived().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoFrameReceived().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoFrameReceived().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoFrameReceived, a, b);
  }
};
_VideoFrameReceived.runtime = proto2;
_VideoFrameReceived.typeName = "livekit.proto.VideoFrameReceived";
_VideoFrameReceived.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "buffer", kind: "message", T: OwnedVideoBuffer, req: true },
  { no: 2, name: "timestamp_us", kind: "scalar", T: 3, req: true },
  { no: 3, name: "rotation", kind: "enum", T: proto2.getEnumType(VideoRotation), req: true }
]);
let VideoFrameReceived = _VideoFrameReceived;
const _VideoStreamEOS = class _VideoStreamEOS extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoStreamEOS().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoStreamEOS().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoStreamEOS().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoStreamEOS, a, b);
  }
};
_VideoStreamEOS.runtime = proto2;
_VideoStreamEOS.typeName = "livekit.proto.VideoStreamEOS";
_VideoStreamEOS.fields = proto2.util.newFieldList(() => []);
let VideoStreamEOS = _VideoStreamEOS;
const _VideoSourceResolution = class _VideoSourceResolution extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoSourceResolution().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoSourceResolution().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoSourceResolution().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoSourceResolution, a, b);
  }
};
_VideoSourceResolution.runtime = proto2;
_VideoSourceResolution.typeName = "livekit.proto.VideoSourceResolution";
_VideoSourceResolution.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "width", kind: "scalar", T: 13, req: true },
  { no: 2, name: "height", kind: "scalar", T: 13, req: true }
]);
let VideoSourceResolution = _VideoSourceResolution;
const _VideoSourceInfo = class _VideoSourceInfo extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoSourceInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoSourceInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoSourceInfo().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoSourceInfo, a, b);
  }
};
_VideoSourceInfo.runtime = proto2;
_VideoSourceInfo.typeName = "livekit.proto.VideoSourceInfo";
_VideoSourceInfo.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "type", kind: "enum", T: proto2.getEnumType(VideoSourceType), req: true }
]);
let VideoSourceInfo = _VideoSourceInfo;
const _OwnedVideoSource = class _OwnedVideoSource extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _OwnedVideoSource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _OwnedVideoSource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _OwnedVideoSource().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_OwnedVideoSource, a, b);
  }
};
_OwnedVideoSource.runtime = proto2;
_OwnedVideoSource.typeName = "livekit.proto.OwnedVideoSource";
_OwnedVideoSource.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "handle", kind: "message", T: FfiOwnedHandle, req: true },
  { no: 2, name: "info", kind: "message", T: VideoSourceInfo, req: true }
]);
let OwnedVideoSource = _OwnedVideoSource;
export {
  CaptureVideoFrameRequest,
  CaptureVideoFrameResponse,
  NewVideoSourceRequest,
  NewVideoSourceResponse,
  NewVideoStreamRequest,
  NewVideoStreamResponse,
  OwnedVideoBuffer,
  OwnedVideoSource,
  OwnedVideoStream,
  VideoBufferInfo,
  VideoBufferInfo_ComponentInfo,
  VideoBufferType,
  VideoCodec,
  VideoConvertRequest,
  VideoConvertResponse,
  VideoFrameReceived,
  VideoResolution,
  VideoRotation,
  VideoSourceInfo,
  VideoSourceResolution,
  VideoSourceType,
  VideoStreamEOS,
  VideoStreamEvent,
  VideoStreamFromParticipantRequest,
  VideoStreamFromParticipantResponse,
  VideoStreamInfo,
  VideoStreamType
};
//# sourceMappingURL=video_frame_pb.js.map