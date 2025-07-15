import { FfiClient, FfiHandle } from "./ffi_client.js";
import {
  CaptureVideoFrameRequest,
  NewVideoSourceRequest,
  VideoRotation,
  VideoSourceType
} from "./proto/video_frame_pb.js";
class VideoSource {
  constructor(width, height) {
    /** @internal */
    this.closed = false;
    var _a;
    this.width = width;
    this.height = height;
    const req = new NewVideoSourceRequest({
      type: VideoSourceType.VIDEO_SOURCE_NATIVE,
      resolution: {
        width,
        height
      }
    });
    const res = FfiClient.instance.request({
      message: {
        case: "newVideoSource",
        value: req
      }
    });
    this.info = (_a = res.source) == null ? void 0 : _a.info;
    this.ffiHandle = new FfiHandle(res.source.handle.id);
  }
  captureFrame(frame, timestampUs = BigInt(0), rotation = VideoRotation.VIDEO_ROTATION_0) {
    if (this.closed) {
      throw new Error("VideoSource is closed");
    }
    const req = new CaptureVideoFrameRequest({
      sourceHandle: this.ffiHandle.handle,
      buffer: frame.protoInfo(),
      rotation,
      timestampUs
    });
    FfiClient.instance.request({
      message: { case: "captureVideoFrame", value: req }
    });
  }
  async close() {
    this.ffiHandle.dispose();
    this.closed = true;
  }
}
export {
  VideoSource
};
//# sourceMappingURL=video_source.js.map