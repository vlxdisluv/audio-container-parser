import { Message, proto2 } from "@bufbuild/protobuf";
var DataChannelState = /* @__PURE__ */ ((DataChannelState2) => {
  DataChannelState2[DataChannelState2["DC_CONNECTING"] = 0] = "DC_CONNECTING";
  DataChannelState2[DataChannelState2["DC_OPEN"] = 1] = "DC_OPEN";
  DataChannelState2[DataChannelState2["DC_CLOSING"] = 2] = "DC_CLOSING";
  DataChannelState2[DataChannelState2["DC_CLOSED"] = 3] = "DC_CLOSED";
  return DataChannelState2;
})(DataChannelState || {});
proto2.util.setEnumType(DataChannelState, "livekit.proto.DataChannelState", [
  { no: 0, name: "DC_CONNECTING" },
  { no: 1, name: "DC_OPEN" },
  { no: 2, name: "DC_CLOSING" },
  { no: 3, name: "DC_CLOSED" }
]);
var QualityLimitationReason = /* @__PURE__ */ ((QualityLimitationReason2) => {
  QualityLimitationReason2[QualityLimitationReason2["LIMITATION_NONE"] = 0] = "LIMITATION_NONE";
  QualityLimitationReason2[QualityLimitationReason2["LIMITATION_CPU"] = 1] = "LIMITATION_CPU";
  QualityLimitationReason2[QualityLimitationReason2["LIMITATION_BANDWIDTH"] = 2] = "LIMITATION_BANDWIDTH";
  QualityLimitationReason2[QualityLimitationReason2["LIMITATION_OTHER"] = 3] = "LIMITATION_OTHER";
  return QualityLimitationReason2;
})(QualityLimitationReason || {});
proto2.util.setEnumType(QualityLimitationReason, "livekit.proto.QualityLimitationReason", [
  { no: 0, name: "LIMITATION_NONE" },
  { no: 1, name: "LIMITATION_CPU" },
  { no: 2, name: "LIMITATION_BANDWIDTH" },
  { no: 3, name: "LIMITATION_OTHER" }
]);
var IceRole = /* @__PURE__ */ ((IceRole2) => {
  IceRole2[IceRole2["ICE_UNKNOWN"] = 0] = "ICE_UNKNOWN";
  IceRole2[IceRole2["ICE_CONTROLLING"] = 1] = "ICE_CONTROLLING";
  IceRole2[IceRole2["ICE_CONTROLLED"] = 2] = "ICE_CONTROLLED";
  return IceRole2;
})(IceRole || {});
proto2.util.setEnumType(IceRole, "livekit.proto.IceRole", [
  { no: 0, name: "ICE_UNKNOWN" },
  { no: 1, name: "ICE_CONTROLLING" },
  { no: 2, name: "ICE_CONTROLLED" }
]);
var DtlsTransportState = /* @__PURE__ */ ((DtlsTransportState2) => {
  DtlsTransportState2[DtlsTransportState2["DTLS_TRANSPORT_NEW"] = 0] = "DTLS_TRANSPORT_NEW";
  DtlsTransportState2[DtlsTransportState2["DTLS_TRANSPORT_CONNECTING"] = 1] = "DTLS_TRANSPORT_CONNECTING";
  DtlsTransportState2[DtlsTransportState2["DTLS_TRANSPORT_CONNECTED"] = 2] = "DTLS_TRANSPORT_CONNECTED";
  DtlsTransportState2[DtlsTransportState2["DTLS_TRANSPORT_CLOSED"] = 3] = "DTLS_TRANSPORT_CLOSED";
  DtlsTransportState2[DtlsTransportState2["DTLS_TRANSPORT_FAILED"] = 4] = "DTLS_TRANSPORT_FAILED";
  return DtlsTransportState2;
})(DtlsTransportState || {});
proto2.util.setEnumType(DtlsTransportState, "livekit.proto.DtlsTransportState", [
  { no: 0, name: "DTLS_TRANSPORT_NEW" },
  { no: 1, name: "DTLS_TRANSPORT_CONNECTING" },
  { no: 2, name: "DTLS_TRANSPORT_CONNECTED" },
  { no: 3, name: "DTLS_TRANSPORT_CLOSED" },
  { no: 4, name: "DTLS_TRANSPORT_FAILED" }
]);
var IceTransportState = /* @__PURE__ */ ((IceTransportState2) => {
  IceTransportState2[IceTransportState2["ICE_TRANSPORT_NEW"] = 0] = "ICE_TRANSPORT_NEW";
  IceTransportState2[IceTransportState2["ICE_TRANSPORT_CHECKING"] = 1] = "ICE_TRANSPORT_CHECKING";
  IceTransportState2[IceTransportState2["ICE_TRANSPORT_CONNECTED"] = 2] = "ICE_TRANSPORT_CONNECTED";
  IceTransportState2[IceTransportState2["ICE_TRANSPORT_COMPLETED"] = 3] = "ICE_TRANSPORT_COMPLETED";
  IceTransportState2[IceTransportState2["ICE_TRANSPORT_DISCONNECTED"] = 4] = "ICE_TRANSPORT_DISCONNECTED";
  IceTransportState2[IceTransportState2["ICE_TRANSPORT_FAILED"] = 5] = "ICE_TRANSPORT_FAILED";
  IceTransportState2[IceTransportState2["ICE_TRANSPORT_CLOSED"] = 6] = "ICE_TRANSPORT_CLOSED";
  return IceTransportState2;
})(IceTransportState || {});
proto2.util.setEnumType(IceTransportState, "livekit.proto.IceTransportState", [
  { no: 0, name: "ICE_TRANSPORT_NEW" },
  { no: 1, name: "ICE_TRANSPORT_CHECKING" },
  { no: 2, name: "ICE_TRANSPORT_CONNECTED" },
  { no: 3, name: "ICE_TRANSPORT_COMPLETED" },
  { no: 4, name: "ICE_TRANSPORT_DISCONNECTED" },
  { no: 5, name: "ICE_TRANSPORT_FAILED" },
  { no: 6, name: "ICE_TRANSPORT_CLOSED" }
]);
var DtlsRole = /* @__PURE__ */ ((DtlsRole2) => {
  DtlsRole2[DtlsRole2["DTLS_CLIENT"] = 0] = "DTLS_CLIENT";
  DtlsRole2[DtlsRole2["DTLS_SERVER"] = 1] = "DTLS_SERVER";
  DtlsRole2[DtlsRole2["DTLS_UNKNOWN"] = 2] = "DTLS_UNKNOWN";
  return DtlsRole2;
})(DtlsRole || {});
proto2.util.setEnumType(DtlsRole, "livekit.proto.DtlsRole", [
  { no: 0, name: "DTLS_CLIENT" },
  { no: 1, name: "DTLS_SERVER" },
  { no: 2, name: "DTLS_UNKNOWN" }
]);
var IceCandidatePairState = /* @__PURE__ */ ((IceCandidatePairState2) => {
  IceCandidatePairState2[IceCandidatePairState2["PAIR_FROZEN"] = 0] = "PAIR_FROZEN";
  IceCandidatePairState2[IceCandidatePairState2["PAIR_WAITING"] = 1] = "PAIR_WAITING";
  IceCandidatePairState2[IceCandidatePairState2["PAIR_IN_PROGRESS"] = 2] = "PAIR_IN_PROGRESS";
  IceCandidatePairState2[IceCandidatePairState2["PAIR_FAILED"] = 3] = "PAIR_FAILED";
  IceCandidatePairState2[IceCandidatePairState2["PAIR_SUCCEEDED"] = 4] = "PAIR_SUCCEEDED";
  return IceCandidatePairState2;
})(IceCandidatePairState || {});
proto2.util.setEnumType(IceCandidatePairState, "livekit.proto.IceCandidatePairState", [
  { no: 0, name: "PAIR_FROZEN" },
  { no: 1, name: "PAIR_WAITING" },
  { no: 2, name: "PAIR_IN_PROGRESS" },
  { no: 3, name: "PAIR_FAILED" },
  { no: 4, name: "PAIR_SUCCEEDED" }
]);
var IceCandidateType = /* @__PURE__ */ ((IceCandidateType2) => {
  IceCandidateType2[IceCandidateType2["HOST"] = 0] = "HOST";
  IceCandidateType2[IceCandidateType2["SRFLX"] = 1] = "SRFLX";
  IceCandidateType2[IceCandidateType2["PRFLX"] = 2] = "PRFLX";
  IceCandidateType2[IceCandidateType2["RELAY"] = 3] = "RELAY";
  return IceCandidateType2;
})(IceCandidateType || {});
proto2.util.setEnumType(IceCandidateType, "livekit.proto.IceCandidateType", [
  { no: 0, name: "HOST" },
  { no: 1, name: "SRFLX" },
  { no: 2, name: "PRFLX" },
  { no: 3, name: "RELAY" }
]);
var IceServerTransportProtocol = /* @__PURE__ */ ((IceServerTransportProtocol2) => {
  IceServerTransportProtocol2[IceServerTransportProtocol2["TRANSPORT_UDP"] = 0] = "TRANSPORT_UDP";
  IceServerTransportProtocol2[IceServerTransportProtocol2["TRANSPORT_TCP"] = 1] = "TRANSPORT_TCP";
  IceServerTransportProtocol2[IceServerTransportProtocol2["TRANSPORT_TLS"] = 2] = "TRANSPORT_TLS";
  return IceServerTransportProtocol2;
})(IceServerTransportProtocol || {});
proto2.util.setEnumType(IceServerTransportProtocol, "livekit.proto.IceServerTransportProtocol", [
  { no: 0, name: "TRANSPORT_UDP" },
  { no: 1, name: "TRANSPORT_TCP" },
  { no: 2, name: "TRANSPORT_TLS" }
]);
var IceTcpCandidateType = /* @__PURE__ */ ((IceTcpCandidateType2) => {
  IceTcpCandidateType2[IceTcpCandidateType2["CANDIDATE_ACTIVE"] = 0] = "CANDIDATE_ACTIVE";
  IceTcpCandidateType2[IceTcpCandidateType2["CANDIDATE_PASSIVE"] = 1] = "CANDIDATE_PASSIVE";
  IceTcpCandidateType2[IceTcpCandidateType2["CANDIDATE_SO"] = 2] = "CANDIDATE_SO";
  return IceTcpCandidateType2;
})(IceTcpCandidateType || {});
proto2.util.setEnumType(IceTcpCandidateType, "livekit.proto.IceTcpCandidateType", [
  { no: 0, name: "CANDIDATE_ACTIVE" },
  { no: 1, name: "CANDIDATE_PASSIVE" },
  { no: 2, name: "CANDIDATE_SO" }
]);
const _RtcStats = class _RtcStats extends Message {
  constructor(data) {
    super();
    /**
     * @generated from oneof livekit.proto.RtcStats.stats
     */
    this.stats = { case: void 0 };
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats, a, b);
  }
};
_RtcStats.runtime = proto2;
_RtcStats.typeName = "livekit.proto.RtcStats";
_RtcStats.fields = proto2.util.newFieldList(() => [
  { no: 3, name: "codec", kind: "message", T: RtcStats_Codec, oneof: "stats" },
  { no: 4, name: "inbound_rtp", kind: "message", T: RtcStats_InboundRtp, oneof: "stats" },
  { no: 5, name: "outbound_rtp", kind: "message", T: RtcStats_OutboundRtp, oneof: "stats" },
  { no: 6, name: "remote_inbound_rtp", kind: "message", T: RtcStats_RemoteInboundRtp, oneof: "stats" },
  { no: 7, name: "remote_outbound_rtp", kind: "message", T: RtcStats_RemoteOutboundRtp, oneof: "stats" },
  { no: 8, name: "media_source", kind: "message", T: RtcStats_MediaSource, oneof: "stats" },
  { no: 9, name: "media_playout", kind: "message", T: RtcStats_MediaPlayout, oneof: "stats" },
  { no: 10, name: "peer_connection", kind: "message", T: RtcStats_PeerConnection, oneof: "stats" },
  { no: 11, name: "data_channel", kind: "message", T: RtcStats_DataChannel, oneof: "stats" },
  { no: 12, name: "transport", kind: "message", T: RtcStats_Transport, oneof: "stats" },
  { no: 13, name: "candidate_pair", kind: "message", T: RtcStats_CandidatePair, oneof: "stats" },
  { no: 14, name: "local_candidate", kind: "message", T: RtcStats_LocalCandidate, oneof: "stats" },
  { no: 15, name: "remote_candidate", kind: "message", T: RtcStats_RemoteCandidate, oneof: "stats" },
  { no: 16, name: "certificate", kind: "message", T: RtcStats_Certificate, oneof: "stats" },
  { no: 17, name: "stream", kind: "message", T: RtcStats_Stream, oneof: "stats" },
  { no: 18, name: "track", kind: "message", T: RtcStats_Track, oneof: "stats" }
]);
let RtcStats = _RtcStats;
const _RtcStats_Codec = class _RtcStats_Codec extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_Codec().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_Codec().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_Codec().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_Codec, a, b);
  }
};
_RtcStats_Codec.runtime = proto2;
_RtcStats_Codec.typeName = "livekit.proto.RtcStats.Codec";
_RtcStats_Codec.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "codec", kind: "message", T: CodecStats, req: true }
]);
let RtcStats_Codec = _RtcStats_Codec;
const _RtcStats_InboundRtp = class _RtcStats_InboundRtp extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_InboundRtp().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_InboundRtp().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_InboundRtp().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_InboundRtp, a, b);
  }
};
_RtcStats_InboundRtp.runtime = proto2;
_RtcStats_InboundRtp.typeName = "livekit.proto.RtcStats.InboundRtp";
_RtcStats_InboundRtp.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "stream", kind: "message", T: RtpStreamStats, req: true },
  { no: 3, name: "received", kind: "message", T: ReceivedRtpStreamStats, req: true },
  { no: 4, name: "inbound", kind: "message", T: InboundRtpStreamStats, req: true }
]);
let RtcStats_InboundRtp = _RtcStats_InboundRtp;
const _RtcStats_OutboundRtp = class _RtcStats_OutboundRtp extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_OutboundRtp().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_OutboundRtp().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_OutboundRtp().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_OutboundRtp, a, b);
  }
};
_RtcStats_OutboundRtp.runtime = proto2;
_RtcStats_OutboundRtp.typeName = "livekit.proto.RtcStats.OutboundRtp";
_RtcStats_OutboundRtp.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "stream", kind: "message", T: RtpStreamStats, req: true },
  { no: 3, name: "sent", kind: "message", T: SentRtpStreamStats, req: true },
  { no: 4, name: "outbound", kind: "message", T: OutboundRtpStreamStats, req: true }
]);
let RtcStats_OutboundRtp = _RtcStats_OutboundRtp;
const _RtcStats_RemoteInboundRtp = class _RtcStats_RemoteInboundRtp extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_RemoteInboundRtp().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_RemoteInboundRtp().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_RemoteInboundRtp().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_RemoteInboundRtp, a, b);
  }
};
_RtcStats_RemoteInboundRtp.runtime = proto2;
_RtcStats_RemoteInboundRtp.typeName = "livekit.proto.RtcStats.RemoteInboundRtp";
_RtcStats_RemoteInboundRtp.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "stream", kind: "message", T: RtpStreamStats, req: true },
  { no: 3, name: "received", kind: "message", T: ReceivedRtpStreamStats, req: true },
  { no: 4, name: "remote_inbound", kind: "message", T: RemoteInboundRtpStreamStats, req: true }
]);
let RtcStats_RemoteInboundRtp = _RtcStats_RemoteInboundRtp;
const _RtcStats_RemoteOutboundRtp = class _RtcStats_RemoteOutboundRtp extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_RemoteOutboundRtp().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_RemoteOutboundRtp().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_RemoteOutboundRtp().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_RemoteOutboundRtp, a, b);
  }
};
_RtcStats_RemoteOutboundRtp.runtime = proto2;
_RtcStats_RemoteOutboundRtp.typeName = "livekit.proto.RtcStats.RemoteOutboundRtp";
_RtcStats_RemoteOutboundRtp.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "stream", kind: "message", T: RtpStreamStats, req: true },
  { no: 3, name: "sent", kind: "message", T: SentRtpStreamStats, req: true },
  { no: 4, name: "remote_outbound", kind: "message", T: RemoteOutboundRtpStreamStats, req: true }
]);
let RtcStats_RemoteOutboundRtp = _RtcStats_RemoteOutboundRtp;
const _RtcStats_MediaSource = class _RtcStats_MediaSource extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_MediaSource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_MediaSource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_MediaSource().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_MediaSource, a, b);
  }
};
_RtcStats_MediaSource.runtime = proto2;
_RtcStats_MediaSource.typeName = "livekit.proto.RtcStats.MediaSource";
_RtcStats_MediaSource.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "source", kind: "message", T: MediaSourceStats, req: true },
  { no: 3, name: "audio", kind: "message", T: AudioSourceStats, req: true },
  { no: 4, name: "video", kind: "message", T: VideoSourceStats, req: true }
]);
let RtcStats_MediaSource = _RtcStats_MediaSource;
const _RtcStats_MediaPlayout = class _RtcStats_MediaPlayout extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_MediaPlayout().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_MediaPlayout().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_MediaPlayout().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_MediaPlayout, a, b);
  }
};
_RtcStats_MediaPlayout.runtime = proto2;
_RtcStats_MediaPlayout.typeName = "livekit.proto.RtcStats.MediaPlayout";
_RtcStats_MediaPlayout.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "audio_playout", kind: "message", T: AudioPlayoutStats, req: true }
]);
let RtcStats_MediaPlayout = _RtcStats_MediaPlayout;
const _RtcStats_PeerConnection = class _RtcStats_PeerConnection extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_PeerConnection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_PeerConnection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_PeerConnection().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_PeerConnection, a, b);
  }
};
_RtcStats_PeerConnection.runtime = proto2;
_RtcStats_PeerConnection.typeName = "livekit.proto.RtcStats.PeerConnection";
_RtcStats_PeerConnection.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "pc", kind: "message", T: PeerConnectionStats, req: true }
]);
let RtcStats_PeerConnection = _RtcStats_PeerConnection;
const _RtcStats_DataChannel = class _RtcStats_DataChannel extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_DataChannel().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_DataChannel().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_DataChannel().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_DataChannel, a, b);
  }
};
_RtcStats_DataChannel.runtime = proto2;
_RtcStats_DataChannel.typeName = "livekit.proto.RtcStats.DataChannel";
_RtcStats_DataChannel.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "dc", kind: "message", T: DataChannelStats, req: true }
]);
let RtcStats_DataChannel = _RtcStats_DataChannel;
const _RtcStats_Transport = class _RtcStats_Transport extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_Transport().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_Transport().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_Transport().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_Transport, a, b);
  }
};
_RtcStats_Transport.runtime = proto2;
_RtcStats_Transport.typeName = "livekit.proto.RtcStats.Transport";
_RtcStats_Transport.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "transport", kind: "message", T: TransportStats, req: true }
]);
let RtcStats_Transport = _RtcStats_Transport;
const _RtcStats_CandidatePair = class _RtcStats_CandidatePair extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_CandidatePair().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_CandidatePair().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_CandidatePair().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_CandidatePair, a, b);
  }
};
_RtcStats_CandidatePair.runtime = proto2;
_RtcStats_CandidatePair.typeName = "livekit.proto.RtcStats.CandidatePair";
_RtcStats_CandidatePair.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "candidate_pair", kind: "message", T: CandidatePairStats, req: true }
]);
let RtcStats_CandidatePair = _RtcStats_CandidatePair;
const _RtcStats_LocalCandidate = class _RtcStats_LocalCandidate extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_LocalCandidate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_LocalCandidate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_LocalCandidate().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_LocalCandidate, a, b);
  }
};
_RtcStats_LocalCandidate.runtime = proto2;
_RtcStats_LocalCandidate.typeName = "livekit.proto.RtcStats.LocalCandidate";
_RtcStats_LocalCandidate.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "candidate", kind: "message", T: IceCandidateStats, req: true }
]);
let RtcStats_LocalCandidate = _RtcStats_LocalCandidate;
const _RtcStats_RemoteCandidate = class _RtcStats_RemoteCandidate extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_RemoteCandidate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_RemoteCandidate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_RemoteCandidate().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_RemoteCandidate, a, b);
  }
};
_RtcStats_RemoteCandidate.runtime = proto2;
_RtcStats_RemoteCandidate.typeName = "livekit.proto.RtcStats.RemoteCandidate";
_RtcStats_RemoteCandidate.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "candidate", kind: "message", T: IceCandidateStats, req: true }
]);
let RtcStats_RemoteCandidate = _RtcStats_RemoteCandidate;
const _RtcStats_Certificate = class _RtcStats_Certificate extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_Certificate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_Certificate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_Certificate().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_Certificate, a, b);
  }
};
_RtcStats_Certificate.runtime = proto2;
_RtcStats_Certificate.typeName = "livekit.proto.RtcStats.Certificate";
_RtcStats_Certificate.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "certificate", kind: "message", T: CertificateStats, req: true }
]);
let RtcStats_Certificate = _RtcStats_Certificate;
const _RtcStats_Stream = class _RtcStats_Stream extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_Stream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_Stream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_Stream().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_Stream, a, b);
  }
};
_RtcStats_Stream.runtime = proto2;
_RtcStats_Stream.typeName = "livekit.proto.RtcStats.Stream";
_RtcStats_Stream.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "rtc", kind: "message", T: RtcStatsData, req: true },
  { no: 2, name: "stream", kind: "message", T: StreamStats, req: true }
]);
let RtcStats_Stream = _RtcStats_Stream;
const _RtcStats_Track = class _RtcStats_Track extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStats_Track().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStats_Track().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStats_Track().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStats_Track, a, b);
  }
};
_RtcStats_Track.runtime = proto2;
_RtcStats_Track.typeName = "livekit.proto.RtcStats.Track";
_RtcStats_Track.fields = proto2.util.newFieldList(() => []);
let RtcStats_Track = _RtcStats_Track;
const _RtcStatsData = class _RtcStatsData extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtcStatsData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtcStatsData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtcStatsData().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtcStatsData, a, b);
  }
};
_RtcStatsData.runtime = proto2;
_RtcStatsData.typeName = "livekit.proto.RtcStatsData";
_RtcStatsData.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "id", kind: "scalar", T: 9, req: true },
  { no: 2, name: "timestamp", kind: "scalar", T: 3, req: true }
]);
let RtcStatsData = _RtcStatsData;
const _CodecStats = class _CodecStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CodecStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CodecStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CodecStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_CodecStats, a, b);
  }
};
_CodecStats.runtime = proto2;
_CodecStats.typeName = "livekit.proto.CodecStats";
_CodecStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "payload_type", kind: "scalar", T: 13, req: true },
  { no: 2, name: "transport_id", kind: "scalar", T: 9, req: true },
  { no: 3, name: "mime_type", kind: "scalar", T: 9, req: true },
  { no: 4, name: "clock_rate", kind: "scalar", T: 13, req: true },
  { no: 5, name: "channels", kind: "scalar", T: 13, req: true },
  { no: 6, name: "sdp_fmtp_line", kind: "scalar", T: 9, req: true }
]);
let CodecStats = _CodecStats;
const _RtpStreamStats = class _RtpStreamStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RtpStreamStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RtpStreamStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RtpStreamStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RtpStreamStats, a, b);
  }
};
_RtpStreamStats.runtime = proto2;
_RtpStreamStats.typeName = "livekit.proto.RtpStreamStats";
_RtpStreamStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "ssrc", kind: "scalar", T: 13, req: true },
  { no: 2, name: "kind", kind: "scalar", T: 9, req: true },
  { no: 3, name: "transport_id", kind: "scalar", T: 9, req: true },
  { no: 4, name: "codec_id", kind: "scalar", T: 9, req: true }
]);
let RtpStreamStats = _RtpStreamStats;
const _ReceivedRtpStreamStats = class _ReceivedRtpStreamStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _ReceivedRtpStreamStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ReceivedRtpStreamStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ReceivedRtpStreamStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_ReceivedRtpStreamStats, a, b);
  }
};
_ReceivedRtpStreamStats.runtime = proto2;
_ReceivedRtpStreamStats.typeName = "livekit.proto.ReceivedRtpStreamStats";
_ReceivedRtpStreamStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "packets_received", kind: "scalar", T: 4, req: true },
  { no: 2, name: "packets_lost", kind: "scalar", T: 3, req: true },
  { no: 3, name: "jitter", kind: "scalar", T: 1, req: true }
]);
let ReceivedRtpStreamStats = _ReceivedRtpStreamStats;
const _InboundRtpStreamStats = class _InboundRtpStreamStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _InboundRtpStreamStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _InboundRtpStreamStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _InboundRtpStreamStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_InboundRtpStreamStats, a, b);
  }
};
_InboundRtpStreamStats.runtime = proto2;
_InboundRtpStreamStats.typeName = "livekit.proto.InboundRtpStreamStats";
_InboundRtpStreamStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "track_identifier", kind: "scalar", T: 9, req: true },
  { no: 2, name: "mid", kind: "scalar", T: 9, req: true },
  { no: 3, name: "remote_id", kind: "scalar", T: 9, req: true },
  { no: 4, name: "frames_decoded", kind: "scalar", T: 13, req: true },
  { no: 5, name: "key_frames_decoded", kind: "scalar", T: 13, req: true },
  { no: 6, name: "frames_rendered", kind: "scalar", T: 13, req: true },
  { no: 7, name: "frames_dropped", kind: "scalar", T: 13, req: true },
  { no: 8, name: "frame_width", kind: "scalar", T: 13, req: true },
  { no: 9, name: "frame_height", kind: "scalar", T: 13, req: true },
  { no: 10, name: "frames_per_second", kind: "scalar", T: 1, req: true },
  { no: 11, name: "qp_sum", kind: "scalar", T: 4, req: true },
  { no: 12, name: "total_decode_time", kind: "scalar", T: 1, req: true },
  { no: 13, name: "total_inter_frame_delay", kind: "scalar", T: 1, req: true },
  { no: 14, name: "total_squared_inter_frame_delay", kind: "scalar", T: 1, req: true },
  { no: 15, name: "pause_count", kind: "scalar", T: 13, req: true },
  { no: 16, name: "total_pause_duration", kind: "scalar", T: 1, req: true },
  { no: 17, name: "freeze_count", kind: "scalar", T: 13, req: true },
  { no: 18, name: "total_freeze_duration", kind: "scalar", T: 1, req: true },
  { no: 19, name: "last_packet_received_timestamp", kind: "scalar", T: 1, req: true },
  { no: 20, name: "header_bytes_received", kind: "scalar", T: 4, req: true },
  { no: 21, name: "packets_discarded", kind: "scalar", T: 4, req: true },
  { no: 22, name: "fec_bytes_received", kind: "scalar", T: 4, req: true },
  { no: 23, name: "fec_packets_received", kind: "scalar", T: 4, req: true },
  { no: 24, name: "fec_packets_discarded", kind: "scalar", T: 4, req: true },
  { no: 25, name: "bytes_received", kind: "scalar", T: 4, req: true },
  { no: 26, name: "nack_count", kind: "scalar", T: 13, req: true },
  { no: 27, name: "fir_count", kind: "scalar", T: 13, req: true },
  { no: 28, name: "pli_count", kind: "scalar", T: 13, req: true },
  { no: 29, name: "total_processing_delay", kind: "scalar", T: 1, req: true },
  { no: 30, name: "estimated_playout_timestamp", kind: "scalar", T: 1, req: true },
  { no: 31, name: "jitter_buffer_delay", kind: "scalar", T: 1, req: true },
  { no: 32, name: "jitter_buffer_target_delay", kind: "scalar", T: 1, req: true },
  { no: 33, name: "jitter_buffer_emitted_count", kind: "scalar", T: 4, req: true },
  { no: 34, name: "jitter_buffer_minimum_delay", kind: "scalar", T: 1, req: true },
  { no: 35, name: "total_samples_received", kind: "scalar", T: 4, req: true },
  { no: 36, name: "concealed_samples", kind: "scalar", T: 4, req: true },
  { no: 37, name: "silent_concealed_samples", kind: "scalar", T: 4, req: true },
  { no: 38, name: "concealment_events", kind: "scalar", T: 4, req: true },
  { no: 39, name: "inserted_samples_for_deceleration", kind: "scalar", T: 4, req: true },
  { no: 40, name: "removed_samples_for_acceleration", kind: "scalar", T: 4, req: true },
  { no: 41, name: "audio_level", kind: "scalar", T: 1, req: true },
  { no: 42, name: "total_audio_energy", kind: "scalar", T: 1, req: true },
  { no: 43, name: "total_samples_duration", kind: "scalar", T: 1, req: true },
  { no: 44, name: "frames_received", kind: "scalar", T: 4, req: true },
  { no: 45, name: "decoder_implementation", kind: "scalar", T: 9, req: true },
  { no: 46, name: "playout_id", kind: "scalar", T: 9, req: true },
  { no: 47, name: "power_efficient_decoder", kind: "scalar", T: 8, req: true },
  { no: 48, name: "frames_assembled_from_multiple_packets", kind: "scalar", T: 4, req: true },
  { no: 49, name: "total_assembly_time", kind: "scalar", T: 1, req: true },
  { no: 50, name: "retransmitted_packets_received", kind: "scalar", T: 4, req: true },
  { no: 51, name: "retransmitted_bytes_received", kind: "scalar", T: 4, req: true },
  { no: 52, name: "rtx_ssrc", kind: "scalar", T: 13, req: true },
  { no: 53, name: "fec_ssrc", kind: "scalar", T: 13, req: true }
]);
let InboundRtpStreamStats = _InboundRtpStreamStats;
const _SentRtpStreamStats = class _SentRtpStreamStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _SentRtpStreamStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _SentRtpStreamStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _SentRtpStreamStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_SentRtpStreamStats, a, b);
  }
};
_SentRtpStreamStats.runtime = proto2;
_SentRtpStreamStats.typeName = "livekit.proto.SentRtpStreamStats";
_SentRtpStreamStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "packets_sent", kind: "scalar", T: 4, req: true },
  { no: 2, name: "bytes_sent", kind: "scalar", T: 4, req: true }
]);
let SentRtpStreamStats = _SentRtpStreamStats;
const _OutboundRtpStreamStats = class _OutboundRtpStreamStats extends Message {
  constructor(data) {
    super();
    /**
     * @generated from field: map<string, double> quality_limitation_durations = 22;
     */
    this.qualityLimitationDurations = {};
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _OutboundRtpStreamStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _OutboundRtpStreamStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _OutboundRtpStreamStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_OutboundRtpStreamStats, a, b);
  }
};
_OutboundRtpStreamStats.runtime = proto2;
_OutboundRtpStreamStats.typeName = "livekit.proto.OutboundRtpStreamStats";
_OutboundRtpStreamStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "mid", kind: "scalar", T: 9, req: true },
  { no: 2, name: "media_source_id", kind: "scalar", T: 9, req: true },
  { no: 3, name: "remote_id", kind: "scalar", T: 9, req: true },
  { no: 4, name: "rid", kind: "scalar", T: 9, req: true },
  { no: 5, name: "header_bytes_sent", kind: "scalar", T: 4, req: true },
  { no: 6, name: "retransmitted_packets_sent", kind: "scalar", T: 4, req: true },
  { no: 7, name: "retransmitted_bytes_sent", kind: "scalar", T: 4, req: true },
  { no: 8, name: "rtx_ssrc", kind: "scalar", T: 13, req: true },
  { no: 9, name: "target_bitrate", kind: "scalar", T: 1, req: true },
  { no: 10, name: "total_encoded_bytes_target", kind: "scalar", T: 4, req: true },
  { no: 11, name: "frame_width", kind: "scalar", T: 13, req: true },
  { no: 12, name: "frame_height", kind: "scalar", T: 13, req: true },
  { no: 13, name: "frames_per_second", kind: "scalar", T: 1, req: true },
  { no: 14, name: "frames_sent", kind: "scalar", T: 13, req: true },
  { no: 15, name: "huge_frames_sent", kind: "scalar", T: 13, req: true },
  { no: 16, name: "frames_encoded", kind: "scalar", T: 13, req: true },
  { no: 17, name: "key_frames_encoded", kind: "scalar", T: 13, req: true },
  { no: 18, name: "qp_sum", kind: "scalar", T: 4, req: true },
  { no: 19, name: "total_encode_time", kind: "scalar", T: 1, req: true },
  { no: 20, name: "total_packet_send_delay", kind: "scalar", T: 1, req: true },
  { no: 21, name: "quality_limitation_reason", kind: "enum", T: proto2.getEnumType(QualityLimitationReason), req: true },
  { no: 22, name: "quality_limitation_durations", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  } },
  { no: 23, name: "quality_limitation_resolution_changes", kind: "scalar", T: 13, req: true },
  { no: 24, name: "nack_count", kind: "scalar", T: 13, req: true },
  { no: 25, name: "fir_count", kind: "scalar", T: 13, req: true },
  { no: 26, name: "pli_count", kind: "scalar", T: 13, req: true },
  { no: 27, name: "encoder_implementation", kind: "scalar", T: 9, req: true },
  { no: 28, name: "power_efficient_encoder", kind: "scalar", T: 8, req: true },
  { no: 29, name: "active", kind: "scalar", T: 8, req: true },
  { no: 30, name: "scalability_mode", kind: "scalar", T: 9, req: true }
]);
let OutboundRtpStreamStats = _OutboundRtpStreamStats;
const _RemoteInboundRtpStreamStats = class _RemoteInboundRtpStreamStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RemoteInboundRtpStreamStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RemoteInboundRtpStreamStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RemoteInboundRtpStreamStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RemoteInboundRtpStreamStats, a, b);
  }
};
_RemoteInboundRtpStreamStats.runtime = proto2;
_RemoteInboundRtpStreamStats.typeName = "livekit.proto.RemoteInboundRtpStreamStats";
_RemoteInboundRtpStreamStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "local_id", kind: "scalar", T: 9, req: true },
  { no: 2, name: "round_trip_time", kind: "scalar", T: 1, req: true },
  { no: 3, name: "total_round_trip_time", kind: "scalar", T: 1, req: true },
  { no: 4, name: "fraction_lost", kind: "scalar", T: 1, req: true },
  { no: 5, name: "round_trip_time_measurements", kind: "scalar", T: 4, req: true }
]);
let RemoteInboundRtpStreamStats = _RemoteInboundRtpStreamStats;
const _RemoteOutboundRtpStreamStats = class _RemoteOutboundRtpStreamStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RemoteOutboundRtpStreamStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RemoteOutboundRtpStreamStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RemoteOutboundRtpStreamStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RemoteOutboundRtpStreamStats, a, b);
  }
};
_RemoteOutboundRtpStreamStats.runtime = proto2;
_RemoteOutboundRtpStreamStats.typeName = "livekit.proto.RemoteOutboundRtpStreamStats";
_RemoteOutboundRtpStreamStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "local_id", kind: "scalar", T: 9, req: true },
  { no: 2, name: "remote_timestamp", kind: "scalar", T: 1, req: true },
  { no: 3, name: "reports_sent", kind: "scalar", T: 4, req: true },
  { no: 4, name: "round_trip_time", kind: "scalar", T: 1, req: true },
  { no: 5, name: "total_round_trip_time", kind: "scalar", T: 1, req: true },
  { no: 6, name: "round_trip_time_measurements", kind: "scalar", T: 4, req: true }
]);
let RemoteOutboundRtpStreamStats = _RemoteOutboundRtpStreamStats;
const _MediaSourceStats = class _MediaSourceStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _MediaSourceStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _MediaSourceStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _MediaSourceStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_MediaSourceStats, a, b);
  }
};
_MediaSourceStats.runtime = proto2;
_MediaSourceStats.typeName = "livekit.proto.MediaSourceStats";
_MediaSourceStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "track_identifier", kind: "scalar", T: 9, req: true },
  { no: 2, name: "kind", kind: "scalar", T: 9, req: true }
]);
let MediaSourceStats = _MediaSourceStats;
const _AudioSourceStats = class _AudioSourceStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _AudioSourceStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _AudioSourceStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _AudioSourceStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_AudioSourceStats, a, b);
  }
};
_AudioSourceStats.runtime = proto2;
_AudioSourceStats.typeName = "livekit.proto.AudioSourceStats";
_AudioSourceStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "audio_level", kind: "scalar", T: 1, req: true },
  { no: 2, name: "total_audio_energy", kind: "scalar", T: 1, req: true },
  { no: 3, name: "total_samples_duration", kind: "scalar", T: 1, req: true },
  { no: 4, name: "echo_return_loss", kind: "scalar", T: 1, req: true },
  { no: 5, name: "echo_return_loss_enhancement", kind: "scalar", T: 1, req: true },
  { no: 6, name: "dropped_samples_duration", kind: "scalar", T: 1, req: true },
  { no: 7, name: "dropped_samples_events", kind: "scalar", T: 13, req: true },
  { no: 8, name: "total_capture_delay", kind: "scalar", T: 1, req: true },
  { no: 9, name: "total_samples_captured", kind: "scalar", T: 4, req: true }
]);
let AudioSourceStats = _AudioSourceStats;
const _VideoSourceStats = class _VideoSourceStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _VideoSourceStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _VideoSourceStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _VideoSourceStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_VideoSourceStats, a, b);
  }
};
_VideoSourceStats.runtime = proto2;
_VideoSourceStats.typeName = "livekit.proto.VideoSourceStats";
_VideoSourceStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "width", kind: "scalar", T: 13, req: true },
  { no: 2, name: "height", kind: "scalar", T: 13, req: true },
  { no: 3, name: "frames", kind: "scalar", T: 13, req: true },
  { no: 4, name: "frames_per_second", kind: "scalar", T: 1, req: true }
]);
let VideoSourceStats = _VideoSourceStats;
const _AudioPlayoutStats = class _AudioPlayoutStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _AudioPlayoutStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _AudioPlayoutStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _AudioPlayoutStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_AudioPlayoutStats, a, b);
  }
};
_AudioPlayoutStats.runtime = proto2;
_AudioPlayoutStats.typeName = "livekit.proto.AudioPlayoutStats";
_AudioPlayoutStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "kind", kind: "scalar", T: 9, req: true },
  { no: 2, name: "synthesized_samples_duration", kind: "scalar", T: 1, req: true },
  { no: 3, name: "synthesized_samples_events", kind: "scalar", T: 13, req: true },
  { no: 4, name: "total_samples_duration", kind: "scalar", T: 1, req: true },
  { no: 5, name: "total_playout_delay", kind: "scalar", T: 1, req: true },
  { no: 6, name: "total_samples_count", kind: "scalar", T: 4, req: true }
]);
let AudioPlayoutStats = _AudioPlayoutStats;
const _PeerConnectionStats = class _PeerConnectionStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _PeerConnectionStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _PeerConnectionStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _PeerConnectionStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_PeerConnectionStats, a, b);
  }
};
_PeerConnectionStats.runtime = proto2;
_PeerConnectionStats.typeName = "livekit.proto.PeerConnectionStats";
_PeerConnectionStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "data_channels_opened", kind: "scalar", T: 13, req: true },
  { no: 2, name: "data_channels_closed", kind: "scalar", T: 13, req: true }
]);
let PeerConnectionStats = _PeerConnectionStats;
const _DataChannelStats = class _DataChannelStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _DataChannelStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _DataChannelStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _DataChannelStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_DataChannelStats, a, b);
  }
};
_DataChannelStats.runtime = proto2;
_DataChannelStats.typeName = "livekit.proto.DataChannelStats";
_DataChannelStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "label", kind: "scalar", T: 9, req: true },
  { no: 2, name: "protocol", kind: "scalar", T: 9, req: true },
  { no: 3, name: "data_channel_identifier", kind: "scalar", T: 5, req: true },
  { no: 4, name: "state", kind: "enum", T: proto2.getEnumType(DataChannelState), opt: true },
  { no: 5, name: "messages_sent", kind: "scalar", T: 13, req: true },
  { no: 6, name: "bytes_sent", kind: "scalar", T: 4, req: true },
  { no: 7, name: "messages_received", kind: "scalar", T: 13, req: true },
  { no: 8, name: "bytes_received", kind: "scalar", T: 4, req: true }
]);
let DataChannelStats = _DataChannelStats;
const _TransportStats = class _TransportStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _TransportStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _TransportStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _TransportStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_TransportStats, a, b);
  }
};
_TransportStats.runtime = proto2;
_TransportStats.typeName = "livekit.proto.TransportStats";
_TransportStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "packets_sent", kind: "scalar", T: 4, req: true },
  { no: 2, name: "packets_received", kind: "scalar", T: 4, req: true },
  { no: 3, name: "bytes_sent", kind: "scalar", T: 4, req: true },
  { no: 4, name: "bytes_received", kind: "scalar", T: 4, req: true },
  { no: 5, name: "ice_role", kind: "enum", T: proto2.getEnumType(IceRole), req: true },
  { no: 6, name: "ice_local_username_fragment", kind: "scalar", T: 9, req: true },
  { no: 7, name: "dtls_state", kind: "enum", T: proto2.getEnumType(DtlsTransportState), opt: true },
  { no: 8, name: "ice_state", kind: "enum", T: proto2.getEnumType(IceTransportState), opt: true },
  { no: 9, name: "selected_candidate_pair_id", kind: "scalar", T: 9, req: true },
  { no: 10, name: "local_certificate_id", kind: "scalar", T: 9, req: true },
  { no: 11, name: "remote_certificate_id", kind: "scalar", T: 9, req: true },
  { no: 12, name: "tls_version", kind: "scalar", T: 9, req: true },
  { no: 13, name: "dtls_cipher", kind: "scalar", T: 9, req: true },
  { no: 14, name: "dtls_role", kind: "enum", T: proto2.getEnumType(DtlsRole), req: true },
  { no: 15, name: "srtp_cipher", kind: "scalar", T: 9, req: true },
  { no: 16, name: "selected_candidate_pair_changes", kind: "scalar", T: 13, req: true }
]);
let TransportStats = _TransportStats;
const _CandidatePairStats = class _CandidatePairStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CandidatePairStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CandidatePairStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CandidatePairStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_CandidatePairStats, a, b);
  }
};
_CandidatePairStats.runtime = proto2;
_CandidatePairStats.typeName = "livekit.proto.CandidatePairStats";
_CandidatePairStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "transport_id", kind: "scalar", T: 9, req: true },
  { no: 2, name: "local_candidate_id", kind: "scalar", T: 9, req: true },
  { no: 3, name: "remote_candidate_id", kind: "scalar", T: 9, req: true },
  { no: 4, name: "state", kind: "enum", T: proto2.getEnumType(IceCandidatePairState), opt: true },
  { no: 5, name: "nominated", kind: "scalar", T: 8, req: true },
  { no: 6, name: "packets_sent", kind: "scalar", T: 4, req: true },
  { no: 7, name: "packets_received", kind: "scalar", T: 4, req: true },
  { no: 8, name: "bytes_sent", kind: "scalar", T: 4, req: true },
  { no: 9, name: "bytes_received", kind: "scalar", T: 4, req: true },
  { no: 10, name: "last_packet_sent_timestamp", kind: "scalar", T: 1, req: true },
  { no: 11, name: "last_packet_received_timestamp", kind: "scalar", T: 1, req: true },
  { no: 12, name: "total_round_trip_time", kind: "scalar", T: 1, req: true },
  { no: 13, name: "current_round_trip_time", kind: "scalar", T: 1, req: true },
  { no: 14, name: "available_outgoing_bitrate", kind: "scalar", T: 1, req: true },
  { no: 15, name: "available_incoming_bitrate", kind: "scalar", T: 1, req: true },
  { no: 16, name: "requests_received", kind: "scalar", T: 4, req: true },
  { no: 17, name: "requests_sent", kind: "scalar", T: 4, req: true },
  { no: 18, name: "responses_received", kind: "scalar", T: 4, req: true },
  { no: 19, name: "responses_sent", kind: "scalar", T: 4, req: true },
  { no: 20, name: "consent_requests_sent", kind: "scalar", T: 4, req: true },
  { no: 21, name: "packets_discarded_on_send", kind: "scalar", T: 13, req: true },
  { no: 22, name: "bytes_discarded_on_send", kind: "scalar", T: 4, req: true }
]);
let CandidatePairStats = _CandidatePairStats;
const _IceCandidateStats = class _IceCandidateStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _IceCandidateStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _IceCandidateStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _IceCandidateStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_IceCandidateStats, a, b);
  }
};
_IceCandidateStats.runtime = proto2;
_IceCandidateStats.typeName = "livekit.proto.IceCandidateStats";
_IceCandidateStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "transport_id", kind: "scalar", T: 9, req: true },
  { no: 2, name: "address", kind: "scalar", T: 9, req: true },
  { no: 3, name: "port", kind: "scalar", T: 5, req: true },
  { no: 4, name: "protocol", kind: "scalar", T: 9, req: true },
  { no: 5, name: "candidate_type", kind: "enum", T: proto2.getEnumType(IceCandidateType), opt: true },
  { no: 6, name: "priority", kind: "scalar", T: 5, req: true },
  { no: 7, name: "url", kind: "scalar", T: 9, req: true },
  { no: 8, name: "relay_protocol", kind: "enum", T: proto2.getEnumType(IceServerTransportProtocol), opt: true },
  { no: 9, name: "foundation", kind: "scalar", T: 9, req: true },
  { no: 10, name: "related_address", kind: "scalar", T: 9, req: true },
  { no: 11, name: "related_port", kind: "scalar", T: 5, req: true },
  { no: 12, name: "username_fragment", kind: "scalar", T: 9, req: true },
  { no: 13, name: "tcp_type", kind: "enum", T: proto2.getEnumType(IceTcpCandidateType), opt: true }
]);
let IceCandidateStats = _IceCandidateStats;
const _CertificateStats = class _CertificateStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _CertificateStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CertificateStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CertificateStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_CertificateStats, a, b);
  }
};
_CertificateStats.runtime = proto2;
_CertificateStats.typeName = "livekit.proto.CertificateStats";
_CertificateStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "fingerprint", kind: "scalar", T: 9, req: true },
  { no: 2, name: "fingerprint_algorithm", kind: "scalar", T: 9, req: true },
  { no: 3, name: "base64_certificate", kind: "scalar", T: 9, req: true },
  { no: 4, name: "issuer_certificate_id", kind: "scalar", T: 9, req: true }
]);
let CertificateStats = _CertificateStats;
const _StreamStats = class _StreamStats extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _StreamStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _StreamStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _StreamStats().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_StreamStats, a, b);
  }
};
_StreamStats.runtime = proto2;
_StreamStats.typeName = "livekit.proto.StreamStats";
_StreamStats.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "id", kind: "scalar", T: 9, req: true },
  { no: 2, name: "stream_identifier", kind: "scalar", T: 9, req: true }
]);
let StreamStats = _StreamStats;
export {
  AudioPlayoutStats,
  AudioSourceStats,
  CandidatePairStats,
  CertificateStats,
  CodecStats,
  DataChannelState,
  DataChannelStats,
  DtlsRole,
  DtlsTransportState,
  IceCandidatePairState,
  IceCandidateStats,
  IceCandidateType,
  IceRole,
  IceServerTransportProtocol,
  IceTcpCandidateType,
  IceTransportState,
  InboundRtpStreamStats,
  MediaSourceStats,
  OutboundRtpStreamStats,
  PeerConnectionStats,
  QualityLimitationReason,
  ReceivedRtpStreamStats,
  RemoteInboundRtpStreamStats,
  RemoteOutboundRtpStreamStats,
  RtcStats,
  RtcStatsData,
  RtcStats_CandidatePair,
  RtcStats_Certificate,
  RtcStats_Codec,
  RtcStats_DataChannel,
  RtcStats_InboundRtp,
  RtcStats_LocalCandidate,
  RtcStats_MediaPlayout,
  RtcStats_MediaSource,
  RtcStats_OutboundRtp,
  RtcStats_PeerConnection,
  RtcStats_RemoteCandidate,
  RtcStats_RemoteInboundRtp,
  RtcStats_RemoteOutboundRtp,
  RtcStats_Stream,
  RtcStats_Track,
  RtcStats_Transport,
  RtpStreamStats,
  SentRtpStreamStats,
  StreamStats,
  TransportStats,
  VideoSourceStats
};
//# sourceMappingURL=stats_pb.js.map