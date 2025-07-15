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
var audio_filter_exports = {};
__export(audio_filter_exports, {
  AudioFilter: () => AudioFilter
});
module.exports = __toCommonJS(audio_filter_exports);
var import_ffi_client = require("./ffi_client.cjs");
var import_audio_frame_pb = require("./proto/audio_frame_pb.cjs");
class AudioFilter {
  constructor(moduleId, path, dependencies = []) {
    const req = new import_audio_frame_pb.LoadAudioFilterPluginRequest({
      moduleId,
      pluginPath: path,
      dependencies
    });
    const res = import_ffi_client.FfiClient.instance.request({
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AudioFilter
});
//# sourceMappingURL=audio_filter.cjs.map