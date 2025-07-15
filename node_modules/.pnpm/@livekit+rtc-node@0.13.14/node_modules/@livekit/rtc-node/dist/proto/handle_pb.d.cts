import { Message, PartialMessage, proto2, FieldList, BinaryReadOptions, JsonValue, JsonReadOptions, PlainMessage } from '@bufbuild/protobuf';

/**
 * # Safety
 * The foreign language is responsable for disposing handles
 * Forgetting to dispose the handle may lead to memory leaks
 *
 * Dropping a handle doesn't necessarily mean that the object is destroyed if it is still used
 * on the FfiServer (Atomic reference counting)
 *
 * When refering to a handle without owning it, we just use a uint32 without this message.
 * (the variable name is suffixed with "_handle")
 *
 * @generated from message livekit.proto.FfiOwnedHandle
 */
declare class FfiOwnedHandle extends Message<FfiOwnedHandle> {
    /**
     * @generated from field: required uint64 id = 1;
     */
    id?: bigint;
    constructor(data?: PartialMessage<FfiOwnedHandle>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "livekit.proto.FfiOwnedHandle";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FfiOwnedHandle;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FfiOwnedHandle;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FfiOwnedHandle;
    static equals(a: FfiOwnedHandle | PlainMessage<FfiOwnedHandle> | undefined, b: FfiOwnedHandle | PlainMessage<FfiOwnedHandle> | undefined): boolean;
}

export { FfiOwnedHandle };
