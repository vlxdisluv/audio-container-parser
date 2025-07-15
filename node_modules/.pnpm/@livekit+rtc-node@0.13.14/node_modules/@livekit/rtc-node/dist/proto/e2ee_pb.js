import { Message, proto2 } from "@bufbuild/protobuf";
var EncryptionType = /* @__PURE__ */ ((EncryptionType2) => {
  EncryptionType2[EncryptionType2["NONE"] = 0] = "NONE";
  EncryptionType2[EncryptionType2["GCM"] = 1] = "GCM";
  EncryptionType2[EncryptionType2["CUSTOM"] = 2] = "CUSTOM";
  return EncryptionType2;
})(EncryptionType || {});
proto2.util.setEnumType(EncryptionType, "livekit.proto.EncryptionType", [
  { no: 0, name: "NONE" },
  { no: 1, name: "GCM" },
  { no: 2, name: "CUSTOM" }
]);
var EncryptionState = /* @__PURE__ */ ((EncryptionState2) => {
  EncryptionState2[EncryptionState2["NEW"] = 0] = "NEW";
  EncryptionState2[EncryptionState2["OK"] = 1] = "OK";
  EncryptionState2[EncryptionState2["ENCRYPTION_FAILED"] = 2] = "ENCRYPTION_FAILED";
  EncryptionState2[EncryptionState2["DECRYPTION_FAILED"] = 3] = "DECRYPTION_FAILED";
  EncryptionState2[EncryptionState2["MISSING_KEY"] = 4] = "MISSING_KEY";
  EncryptionState2[EncryptionState2["KEY_RATCHETED"] = 5] = "KEY_RATCHETED";
  EncryptionState2[EncryptionState2["INTERNAL_ERROR"] = 6] = "INTERNAL_ERROR";
  return EncryptionState2;
})(EncryptionState || {});
proto2.util.setEnumType(EncryptionState, "livekit.proto.EncryptionState", [
  { no: 0, name: "NEW" },
  { no: 1, name: "OK" },
  { no: 2, name: "ENCRYPTION_FAILED" },
  { no: 3, name: "DECRYPTION_FAILED" },
  { no: 4, name: "MISSING_KEY" },
  { no: 5, name: "KEY_RATCHETED" },
  { no: 6, name: "INTERNAL_ERROR" }
]);
const _FrameCryptor = class _FrameCryptor extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _FrameCryptor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _FrameCryptor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _FrameCryptor().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_FrameCryptor, a, b);
  }
};
_FrameCryptor.runtime = proto2;
_FrameCryptor.typeName = "livekit.proto.FrameCryptor";
_FrameCryptor.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "participant_identity", kind: "scalar", T: 9, req: true },
  { no: 2, name: "track_sid", kind: "scalar", T: 9, req: true },
  { no: 3, name: "key_index", kind: "scalar", T: 5, req: true },
  { no: 4, name: "enabled", kind: "scalar", T: 8, req: true }
]);
let FrameCryptor = _FrameCryptor;
const _KeyProviderOptions = class _KeyProviderOptions extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _KeyProviderOptions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _KeyProviderOptions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _KeyProviderOptions().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_KeyProviderOptions, a, b);
  }
};
_KeyProviderOptions.runtime = proto2;
_KeyProviderOptions.typeName = "livekit.proto.KeyProviderOptions";
_KeyProviderOptions.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "shared_key", kind: "scalar", T: 12, opt: true },
  { no: 2, name: "ratchet_window_size", kind: "scalar", T: 5, req: true },
  { no: 3, name: "ratchet_salt", kind: "scalar", T: 12, req: true },
  { no: 4, name: "failure_tolerance", kind: "scalar", T: 5, req: true }
]);
let KeyProviderOptions = _KeyProviderOptions;
const _E2eeOptions = class _E2eeOptions extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _E2eeOptions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _E2eeOptions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _E2eeOptions().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_E2eeOptions, a, b);
  }
};
_E2eeOptions.runtime = proto2;
_E2eeOptions.typeName = "livekit.proto.E2eeOptions";
_E2eeOptions.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "encryption_type", kind: "enum", T: proto2.getEnumType(EncryptionType), req: true },
  { no: 2, name: "key_provider_options", kind: "message", T: KeyProviderOptions, req: true }
]);
let E2eeOptions = _E2eeOptions;
const _E2eeManagerSetEnabledRequest = class _E2eeManagerSetEnabledRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _E2eeManagerSetEnabledRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _E2eeManagerSetEnabledRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _E2eeManagerSetEnabledRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_E2eeManagerSetEnabledRequest, a, b);
  }
};
_E2eeManagerSetEnabledRequest.runtime = proto2;
_E2eeManagerSetEnabledRequest.typeName = "livekit.proto.E2eeManagerSetEnabledRequest";
_E2eeManagerSetEnabledRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "enabled", kind: "scalar", T: 8, req: true }
]);
let E2eeManagerSetEnabledRequest = _E2eeManagerSetEnabledRequest;
const _E2eeManagerSetEnabledResponse = class _E2eeManagerSetEnabledResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _E2eeManagerSetEnabledResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _E2eeManagerSetEnabledResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _E2eeManagerSetEnabledResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_E2eeManagerSetEnabledResponse, a, b);
  }
};
_E2eeManagerSetEnabledResponse.runtime = proto2;
_E2eeManagerSetEnabledResponse.typeName = "livekit.proto.E2eeManagerSetEnabledResponse";
_E2eeManagerSetEnabledResponse.fields = proto2.util.newFieldList(() => []);
let E2eeManagerSetEnabledResponse = _E2eeManagerSetEnabledResponse;
const _E2eeManagerGetFrameCryptorsRequest = class _E2eeManagerGetFrameCryptorsRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _E2eeManagerGetFrameCryptorsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _E2eeManagerGetFrameCryptorsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _E2eeManagerGetFrameCryptorsRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_E2eeManagerGetFrameCryptorsRequest, a, b);
  }
};
_E2eeManagerGetFrameCryptorsRequest.runtime = proto2;
_E2eeManagerGetFrameCryptorsRequest.typeName = "livekit.proto.E2eeManagerGetFrameCryptorsRequest";
_E2eeManagerGetFrameCryptorsRequest.fields = proto2.util.newFieldList(() => []);
let E2eeManagerGetFrameCryptorsRequest = _E2eeManagerGetFrameCryptorsRequest;
const _E2eeManagerGetFrameCryptorsResponse = class _E2eeManagerGetFrameCryptorsResponse extends Message {
  constructor(data) {
    super();
    /**
     * @generated from field: repeated livekit.proto.FrameCryptor frame_cryptors = 1;
     */
    this.frameCryptors = [];
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _E2eeManagerGetFrameCryptorsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _E2eeManagerGetFrameCryptorsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _E2eeManagerGetFrameCryptorsResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_E2eeManagerGetFrameCryptorsResponse, a, b);
  }
};
_E2eeManagerGetFrameCryptorsResponse.runtime = proto2;
_E2eeManagerGetFrameCryptorsResponse.typeName = "livekit.proto.E2eeManagerGetFrameCryptorsResponse";
_E2eeManagerGetFrameCryptorsResponse.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "frame_cryptors", kind: "message", T: FrameCryptor, repeated: true }
]);
let E2eeManagerGetFrameCryptorsResponse = _E2eeManagerGetFrameCryptorsResponse;
const _FrameCryptorSetEnabledRequest = class _FrameCryptorSetEnabledRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _FrameCryptorSetEnabledRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _FrameCryptorSetEnabledRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _FrameCryptorSetEnabledRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_FrameCryptorSetEnabledRequest, a, b);
  }
};
_FrameCryptorSetEnabledRequest.runtime = proto2;
_FrameCryptorSetEnabledRequest.typeName = "livekit.proto.FrameCryptorSetEnabledRequest";
_FrameCryptorSetEnabledRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "participant_identity", kind: "scalar", T: 9, req: true },
  { no: 2, name: "track_sid", kind: "scalar", T: 9, req: true },
  { no: 3, name: "enabled", kind: "scalar", T: 8, req: true }
]);
let FrameCryptorSetEnabledRequest = _FrameCryptorSetEnabledRequest;
const _FrameCryptorSetEnabledResponse = class _FrameCryptorSetEnabledResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _FrameCryptorSetEnabledResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _FrameCryptorSetEnabledResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _FrameCryptorSetEnabledResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_FrameCryptorSetEnabledResponse, a, b);
  }
};
_FrameCryptorSetEnabledResponse.runtime = proto2;
_FrameCryptorSetEnabledResponse.typeName = "livekit.proto.FrameCryptorSetEnabledResponse";
_FrameCryptorSetEnabledResponse.fields = proto2.util.newFieldList(() => []);
let FrameCryptorSetEnabledResponse = _FrameCryptorSetEnabledResponse;
const _FrameCryptorSetKeyIndexRequest = class _FrameCryptorSetKeyIndexRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _FrameCryptorSetKeyIndexRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _FrameCryptorSetKeyIndexRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _FrameCryptorSetKeyIndexRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_FrameCryptorSetKeyIndexRequest, a, b);
  }
};
_FrameCryptorSetKeyIndexRequest.runtime = proto2;
_FrameCryptorSetKeyIndexRequest.typeName = "livekit.proto.FrameCryptorSetKeyIndexRequest";
_FrameCryptorSetKeyIndexRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "participant_identity", kind: "scalar", T: 9, req: true },
  { no: 2, name: "track_sid", kind: "scalar", T: 9, req: true },
  { no: 3, name: "key_index", kind: "scalar", T: 5, req: true }
]);
let FrameCryptorSetKeyIndexRequest = _FrameCryptorSetKeyIndexRequest;
const _FrameCryptorSetKeyIndexResponse = class _FrameCryptorSetKeyIndexResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _FrameCryptorSetKeyIndexResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _FrameCryptorSetKeyIndexResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _FrameCryptorSetKeyIndexResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_FrameCryptorSetKeyIndexResponse, a, b);
  }
};
_FrameCryptorSetKeyIndexResponse.runtime = proto2;
_FrameCryptorSetKeyIndexResponse.typeName = "livekit.proto.FrameCryptorSetKeyIndexResponse";
_FrameCryptorSetKeyIndexResponse.fields = proto2.util.newFieldList(() => []);
let FrameCryptorSetKeyIndexResponse = _FrameCryptorSetKeyIndexResponse;
const _SetSharedKeyRequest = class _SetSharedKeyRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _SetSharedKeyRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _SetSharedKeyRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _SetSharedKeyRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_SetSharedKeyRequest, a, b);
  }
};
_SetSharedKeyRequest.runtime = proto2;
_SetSharedKeyRequest.typeName = "livekit.proto.SetSharedKeyRequest";
_SetSharedKeyRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "shared_key", kind: "scalar", T: 12, req: true },
  { no: 2, name: "key_index", kind: "scalar", T: 5, req: true }
]);
let SetSharedKeyRequest = _SetSharedKeyRequest;
const _SetSharedKeyResponse = class _SetSharedKeyResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _SetSharedKeyResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _SetSharedKeyResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _SetSharedKeyResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_SetSharedKeyResponse, a, b);
  }
};
_SetSharedKeyResponse.runtime = proto2;
_SetSharedKeyResponse.typeName = "livekit.proto.SetSharedKeyResponse";
_SetSharedKeyResponse.fields = proto2.util.newFieldList(() => []);
let SetSharedKeyResponse = _SetSharedKeyResponse;
const _RatchetSharedKeyRequest = class _RatchetSharedKeyRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RatchetSharedKeyRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RatchetSharedKeyRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RatchetSharedKeyRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RatchetSharedKeyRequest, a, b);
  }
};
_RatchetSharedKeyRequest.runtime = proto2;
_RatchetSharedKeyRequest.typeName = "livekit.proto.RatchetSharedKeyRequest";
_RatchetSharedKeyRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "key_index", kind: "scalar", T: 5, req: true }
]);
let RatchetSharedKeyRequest = _RatchetSharedKeyRequest;
const _RatchetSharedKeyResponse = class _RatchetSharedKeyResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RatchetSharedKeyResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RatchetSharedKeyResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RatchetSharedKeyResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RatchetSharedKeyResponse, a, b);
  }
};
_RatchetSharedKeyResponse.runtime = proto2;
_RatchetSharedKeyResponse.typeName = "livekit.proto.RatchetSharedKeyResponse";
_RatchetSharedKeyResponse.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "new_key", kind: "scalar", T: 12, opt: true }
]);
let RatchetSharedKeyResponse = _RatchetSharedKeyResponse;
const _GetSharedKeyRequest = class _GetSharedKeyRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _GetSharedKeyRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _GetSharedKeyRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _GetSharedKeyRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_GetSharedKeyRequest, a, b);
  }
};
_GetSharedKeyRequest.runtime = proto2;
_GetSharedKeyRequest.typeName = "livekit.proto.GetSharedKeyRequest";
_GetSharedKeyRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "key_index", kind: "scalar", T: 5, req: true }
]);
let GetSharedKeyRequest = _GetSharedKeyRequest;
const _GetSharedKeyResponse = class _GetSharedKeyResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _GetSharedKeyResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _GetSharedKeyResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _GetSharedKeyResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_GetSharedKeyResponse, a, b);
  }
};
_GetSharedKeyResponse.runtime = proto2;
_GetSharedKeyResponse.typeName = "livekit.proto.GetSharedKeyResponse";
_GetSharedKeyResponse.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "key", kind: "scalar", T: 12, opt: true }
]);
let GetSharedKeyResponse = _GetSharedKeyResponse;
const _SetKeyRequest = class _SetKeyRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _SetKeyRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _SetKeyRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _SetKeyRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_SetKeyRequest, a, b);
  }
};
_SetKeyRequest.runtime = proto2;
_SetKeyRequest.typeName = "livekit.proto.SetKeyRequest";
_SetKeyRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "participant_identity", kind: "scalar", T: 9, req: true },
  { no: 2, name: "key", kind: "scalar", T: 12, req: true },
  { no: 3, name: "key_index", kind: "scalar", T: 5, req: true }
]);
let SetKeyRequest = _SetKeyRequest;
const _SetKeyResponse = class _SetKeyResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _SetKeyResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _SetKeyResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _SetKeyResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_SetKeyResponse, a, b);
  }
};
_SetKeyResponse.runtime = proto2;
_SetKeyResponse.typeName = "livekit.proto.SetKeyResponse";
_SetKeyResponse.fields = proto2.util.newFieldList(() => []);
let SetKeyResponse = _SetKeyResponse;
const _RatchetKeyRequest = class _RatchetKeyRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RatchetKeyRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RatchetKeyRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RatchetKeyRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RatchetKeyRequest, a, b);
  }
};
_RatchetKeyRequest.runtime = proto2;
_RatchetKeyRequest.typeName = "livekit.proto.RatchetKeyRequest";
_RatchetKeyRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "participant_identity", kind: "scalar", T: 9, req: true },
  { no: 2, name: "key_index", kind: "scalar", T: 5, req: true }
]);
let RatchetKeyRequest = _RatchetKeyRequest;
const _RatchetKeyResponse = class _RatchetKeyResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _RatchetKeyResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _RatchetKeyResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _RatchetKeyResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_RatchetKeyResponse, a, b);
  }
};
_RatchetKeyResponse.runtime = proto2;
_RatchetKeyResponse.typeName = "livekit.proto.RatchetKeyResponse";
_RatchetKeyResponse.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "new_key", kind: "scalar", T: 12, opt: true }
]);
let RatchetKeyResponse = _RatchetKeyResponse;
const _GetKeyRequest = class _GetKeyRequest extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _GetKeyRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _GetKeyRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _GetKeyRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_GetKeyRequest, a, b);
  }
};
_GetKeyRequest.runtime = proto2;
_GetKeyRequest.typeName = "livekit.proto.GetKeyRequest";
_GetKeyRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "participant_identity", kind: "scalar", T: 9, req: true },
  { no: 2, name: "key_index", kind: "scalar", T: 5, req: true }
]);
let GetKeyRequest = _GetKeyRequest;
const _GetKeyResponse = class _GetKeyResponse extends Message {
  constructor(data) {
    super();
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _GetKeyResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _GetKeyResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _GetKeyResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_GetKeyResponse, a, b);
  }
};
_GetKeyResponse.runtime = proto2;
_GetKeyResponse.typeName = "livekit.proto.GetKeyResponse";
_GetKeyResponse.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "key", kind: "scalar", T: 12, opt: true }
]);
let GetKeyResponse = _GetKeyResponse;
const _E2eeRequest = class _E2eeRequest extends Message {
  constructor(data) {
    super();
    /**
     * @generated from oneof livekit.proto.E2eeRequest.message
     */
    this.message = { case: void 0 };
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _E2eeRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _E2eeRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _E2eeRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_E2eeRequest, a, b);
  }
};
_E2eeRequest.runtime = proto2;
_E2eeRequest.typeName = "livekit.proto.E2eeRequest";
_E2eeRequest.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "room_handle", kind: "scalar", T: 4, req: true },
  { no: 2, name: "manager_set_enabled", kind: "message", T: E2eeManagerSetEnabledRequest, oneof: "message" },
  { no: 3, name: "manager_get_frame_cryptors", kind: "message", T: E2eeManagerGetFrameCryptorsRequest, oneof: "message" },
  { no: 4, name: "cryptor_set_enabled", kind: "message", T: FrameCryptorSetEnabledRequest, oneof: "message" },
  { no: 5, name: "cryptor_set_key_index", kind: "message", T: FrameCryptorSetKeyIndexRequest, oneof: "message" },
  { no: 6, name: "set_shared_key", kind: "message", T: SetSharedKeyRequest, oneof: "message" },
  { no: 7, name: "ratchet_shared_key", kind: "message", T: RatchetSharedKeyRequest, oneof: "message" },
  { no: 8, name: "get_shared_key", kind: "message", T: GetSharedKeyRequest, oneof: "message" },
  { no: 9, name: "set_key", kind: "message", T: SetKeyRequest, oneof: "message" },
  { no: 10, name: "ratchet_key", kind: "message", T: RatchetKeyRequest, oneof: "message" },
  { no: 11, name: "get_key", kind: "message", T: GetKeyRequest, oneof: "message" }
]);
let E2eeRequest = _E2eeRequest;
const _E2eeResponse = class _E2eeResponse extends Message {
  constructor(data) {
    super();
    /**
     * @generated from oneof livekit.proto.E2eeResponse.message
     */
    this.message = { case: void 0 };
    proto2.util.initPartial(data, this);
  }
  static fromBinary(bytes, options) {
    return new _E2eeResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _E2eeResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _E2eeResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto2.util.equals(_E2eeResponse, a, b);
  }
};
_E2eeResponse.runtime = proto2;
_E2eeResponse.typeName = "livekit.proto.E2eeResponse";
_E2eeResponse.fields = proto2.util.newFieldList(() => [
  { no: 1, name: "manager_set_enabled", kind: "message", T: E2eeManagerSetEnabledResponse, oneof: "message" },
  { no: 2, name: "manager_get_frame_cryptors", kind: "message", T: E2eeManagerGetFrameCryptorsResponse, oneof: "message" },
  { no: 3, name: "cryptor_set_enabled", kind: "message", T: FrameCryptorSetEnabledResponse, oneof: "message" },
  { no: 4, name: "cryptor_set_key_index", kind: "message", T: FrameCryptorSetKeyIndexResponse, oneof: "message" },
  { no: 5, name: "set_shared_key", kind: "message", T: SetSharedKeyResponse, oneof: "message" },
  { no: 6, name: "ratchet_shared_key", kind: "message", T: RatchetSharedKeyResponse, oneof: "message" },
  { no: 7, name: "get_shared_key", kind: "message", T: GetSharedKeyResponse, oneof: "message" },
  { no: 8, name: "set_key", kind: "message", T: SetKeyResponse, oneof: "message" },
  { no: 9, name: "ratchet_key", kind: "message", T: RatchetKeyResponse, oneof: "message" },
  { no: 10, name: "get_key", kind: "message", T: GetKeyResponse, oneof: "message" }
]);
let E2eeResponse = _E2eeResponse;
export {
  E2eeManagerGetFrameCryptorsRequest,
  E2eeManagerGetFrameCryptorsResponse,
  E2eeManagerSetEnabledRequest,
  E2eeManagerSetEnabledResponse,
  E2eeOptions,
  E2eeRequest,
  E2eeResponse,
  EncryptionState,
  EncryptionType,
  FrameCryptor,
  FrameCryptorSetEnabledRequest,
  FrameCryptorSetEnabledResponse,
  FrameCryptorSetKeyIndexRequest,
  FrameCryptorSetKeyIndexResponse,
  GetKeyRequest,
  GetKeyResponse,
  GetSharedKeyRequest,
  GetSharedKeyResponse,
  KeyProviderOptions,
  RatchetKeyRequest,
  RatchetKeyResponse,
  RatchetSharedKeyRequest,
  RatchetSharedKeyResponse,
  SetKeyRequest,
  SetKeyResponse,
  SetSharedKeyRequest,
  SetSharedKeyResponse
};
//# sourceMappingURL=e2ee_pb.js.map