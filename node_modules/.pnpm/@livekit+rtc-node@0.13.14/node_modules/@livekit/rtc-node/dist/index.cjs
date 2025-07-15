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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  AudioFilter: () => import_audio_filter.AudioFilter,
  AudioFrame: () => import_audio_frame.AudioFrame,
  AudioResampler: () => import_audio_resampler.AudioResampler,
  AudioResamplerQuality: () => import_audio_resampler.AudioResamplerQuality,
  AudioSource: () => import_audio_source.AudioSource,
  AudioStream: () => import_audio_stream.AudioStream,
  ConnectError: () => import_room.ConnectError,
  ConnectionQuality: () => import_room_pb.ConnectionQuality,
  ConnectionState: () => import_room_pb.ConnectionState,
  ContinualGatheringPolicy: () => import_room_pb.ContinualGatheringPolicy,
  DataPacketKind: () => import_room_pb.DataPacketKind,
  DisconnectReason: () => import_participant_pb.DisconnectReason,
  E2EEManager: () => import_e2ee.E2EEManager,
  EncryptionState: () => import_e2ee_pb.EncryptionState,
  EncryptionType: () => import_e2ee_pb.EncryptionType,
  FrameCryptor: () => import_e2ee.FrameCryptor,
  IceServer: () => import_room_pb.IceServer,
  IceTransportType: () => import_room_pb.IceTransportType,
  KeyProvider: () => import_e2ee.KeyProvider,
  LocalAudioTrack: () => import_track.LocalAudioTrack,
  LocalParticipant: () => import_participant.LocalParticipant,
  LocalTrackPublication: () => import_track_publication.LocalTrackPublication,
  LocalVideoTrack: () => import_track.LocalVideoTrack,
  Participant: () => import_participant.Participant,
  ParticipantKind: () => import_participant_pb.ParticipantKind,
  RemoteAudioTrack: () => import_track.RemoteAudioTrack,
  RemoteParticipant: () => import_participant.RemoteParticipant,
  RemoteTrackPublication: () => import_track_publication.RemoteTrackPublication,
  RemoteVideoTrack: () => import_track.RemoteVideoTrack,
  Room: () => import_room.Room,
  RoomEvent: () => import_room.RoomEvent,
  RpcError: () => import_rpc.RpcError,
  StreamState: () => import_track_pb.StreamState,
  Track: () => import_track.Track,
  TrackKind: () => import_track_pb.TrackKind,
  TrackPublication: () => import_track_publication.TrackPublication,
  TrackPublishOptions: () => import_room_pb.TrackPublishOptions,
  TrackSource: () => import_track_pb.TrackSource,
  VideoBufferType: () => import_video_frame_pb.VideoBufferType,
  VideoCodec: () => import_video_frame_pb.VideoCodec,
  VideoFrame: () => import_video_frame.VideoFrame,
  VideoRotation: () => import_video_frame_pb.VideoRotation,
  VideoSource: () => import_video_source.VideoSource,
  VideoStream: () => import_video_stream.VideoStream,
  combineAudioFrames: () => import_audio_frame.combineAudioFrames,
  dispose: () => import_ffi_client.dispose
});
module.exports = __toCommonJS(index_exports);
var import_audio_frame = require("./audio_frame.cjs");
var import_audio_resampler = require("./audio_resampler.cjs");
var import_audio_source = require("./audio_source.cjs");
var import_audio_stream = require("./audio_stream.cjs");
var import_audio_filter = require("./audio_filter.cjs");
__reExport(index_exports, require("./data_streams/index.cjs"), module.exports);
var import_e2ee = require("./e2ee.cjs");
var import_ffi_client = require("./ffi_client.cjs");
var import_participant = require("./participant.cjs");
var import_e2ee_pb = require("./proto/e2ee_pb.cjs");
var import_participant_pb = require("./proto/participant_pb.cjs");
var import_room_pb = require("./proto/room_pb.cjs");
var import_track_pb = require("./proto/track_pb.cjs");
var import_video_frame_pb = require("./proto/video_frame_pb.cjs");
var import_room = require("./room.cjs");
var import_rpc = require("./rpc.cjs");
var import_track = require("./track.cjs");
var import_track_publication = require("./track_publication.cjs");
var import_video_frame = require("./video_frame.cjs");
var import_video_source = require("./video_source.cjs");
var import_video_stream = require("./video_stream.cjs");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AudioFilter,
  AudioFrame,
  AudioResampler,
  AudioResamplerQuality,
  AudioSource,
  AudioStream,
  ConnectError,
  ConnectionQuality,
  ConnectionState,
  ContinualGatheringPolicy,
  DataPacketKind,
  DisconnectReason,
  E2EEManager,
  EncryptionState,
  EncryptionType,
  FrameCryptor,
  IceServer,
  IceTransportType,
  KeyProvider,
  LocalAudioTrack,
  LocalParticipant,
  LocalTrackPublication,
  LocalVideoTrack,
  Participant,
  ParticipantKind,
  RemoteAudioTrack,
  RemoteParticipant,
  RemoteTrackPublication,
  RemoteVideoTrack,
  Room,
  RoomEvent,
  RpcError,
  StreamState,
  Track,
  TrackKind,
  TrackPublication,
  TrackPublishOptions,
  TrackSource,
  VideoBufferType,
  VideoCodec,
  VideoFrame,
  VideoRotation,
  VideoSource,
  VideoStream,
  combineAudioFrames,
  dispose,
  ...require("./data_streams/index.cjs")
});
//# sourceMappingURL=index.cjs.map