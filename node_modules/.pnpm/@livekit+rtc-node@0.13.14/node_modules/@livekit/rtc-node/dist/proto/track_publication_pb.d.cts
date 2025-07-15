import { Message, PartialMessage, proto2, FieldList, BinaryReadOptions, JsonValue, JsonReadOptions, PlainMessage } from '@bufbuild/protobuf';

/**
 * Enable/Disable a remote track publication
 *
 * @generated from message livekit.proto.EnableRemoteTrackPublicationRequest
 */
declare class EnableRemoteTrackPublicationRequest extends Message<EnableRemoteTrackPublicationRequest> {
    /**
     * @generated from field: required uint64 track_publication_handle = 1;
     */
    trackPublicationHandle?: bigint;
    /**
     * @generated from field: required bool enabled = 2;
     */
    enabled?: boolean;
    constructor(data?: PartialMessage<EnableRemoteTrackPublicationRequest>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "livekit.proto.EnableRemoteTrackPublicationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnableRemoteTrackPublicationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnableRemoteTrackPublicationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnableRemoteTrackPublicationRequest;
    static equals(a: EnableRemoteTrackPublicationRequest | PlainMessage<EnableRemoteTrackPublicationRequest> | undefined, b: EnableRemoteTrackPublicationRequest | PlainMessage<EnableRemoteTrackPublicationRequest> | undefined): boolean;
}
/**
 * @generated from message livekit.proto.EnableRemoteTrackPublicationResponse
 */
declare class EnableRemoteTrackPublicationResponse extends Message<EnableRemoteTrackPublicationResponse> {
    constructor(data?: PartialMessage<EnableRemoteTrackPublicationResponse>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "livekit.proto.EnableRemoteTrackPublicationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnableRemoteTrackPublicationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnableRemoteTrackPublicationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnableRemoteTrackPublicationResponse;
    static equals(a: EnableRemoteTrackPublicationResponse | PlainMessage<EnableRemoteTrackPublicationResponse> | undefined, b: EnableRemoteTrackPublicationResponse | PlainMessage<EnableRemoteTrackPublicationResponse> | undefined): boolean;
}
/**
 * update a remote track publication dimension
 *
 * @generated from message livekit.proto.UpdateRemoteTrackPublicationDimensionRequest
 */
declare class UpdateRemoteTrackPublicationDimensionRequest extends Message<UpdateRemoteTrackPublicationDimensionRequest> {
    /**
     * @generated from field: required uint64 track_publication_handle = 1;
     */
    trackPublicationHandle?: bigint;
    /**
     * @generated from field: required uint32 width = 2;
     */
    width?: number;
    /**
     * @generated from field: required uint32 height = 3;
     */
    height?: number;
    constructor(data?: PartialMessage<UpdateRemoteTrackPublicationDimensionRequest>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "livekit.proto.UpdateRemoteTrackPublicationDimensionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRemoteTrackPublicationDimensionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRemoteTrackPublicationDimensionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRemoteTrackPublicationDimensionRequest;
    static equals(a: UpdateRemoteTrackPublicationDimensionRequest | PlainMessage<UpdateRemoteTrackPublicationDimensionRequest> | undefined, b: UpdateRemoteTrackPublicationDimensionRequest | PlainMessage<UpdateRemoteTrackPublicationDimensionRequest> | undefined): boolean;
}
/**
 * @generated from message livekit.proto.UpdateRemoteTrackPublicationDimensionResponse
 */
declare class UpdateRemoteTrackPublicationDimensionResponse extends Message<UpdateRemoteTrackPublicationDimensionResponse> {
    constructor(data?: PartialMessage<UpdateRemoteTrackPublicationDimensionResponse>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "livekit.proto.UpdateRemoteTrackPublicationDimensionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRemoteTrackPublicationDimensionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRemoteTrackPublicationDimensionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRemoteTrackPublicationDimensionResponse;
    static equals(a: UpdateRemoteTrackPublicationDimensionResponse | PlainMessage<UpdateRemoteTrackPublicationDimensionResponse> | undefined, b: UpdateRemoteTrackPublicationDimensionResponse | PlainMessage<UpdateRemoteTrackPublicationDimensionResponse> | undefined): boolean;
}

export { EnableRemoteTrackPublicationRequest, EnableRemoteTrackPublicationResponse, UpdateRemoteTrackPublicationDimensionRequest, UpdateRemoteTrackPublicationDimensionResponse };
