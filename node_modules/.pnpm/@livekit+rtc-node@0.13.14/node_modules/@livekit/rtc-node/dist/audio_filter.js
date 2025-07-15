import { FfiClient } from "./ffi_client.js";
import { LoadAudioFilterPluginRequest } from "./proto/audio_frame_pb.js";
class AudioFilter {
  constructor(moduleId, path, dependencies = []) {
    const req = new LoadAudioFilterPluginRequest({
      moduleId,
      pluginPath: path,
      dependencies
    });
    const res = FfiClient.instance.request({
      message: {
        case: "loadAudioFilterPlugin",
        value: req
      }
    });
    if (res.error) {
      throw new Error(`Failed to initialize audio filter: ${res.error}`);
    }
  }
}
export {
  AudioFilter
};
//# sourceMappingURL=audio_filter.js.map