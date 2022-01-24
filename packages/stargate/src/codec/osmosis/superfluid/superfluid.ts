/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.superfluid";

export enum SuperfluidAssetType {
  SuperfluidAssetTypeNative = 0,
  /** SuperfluidAssetTypeLPShare - SuperfluidAssetTypeLendingShare = 2; // for now not exist */
  SuperfluidAssetTypeLPShare = 1,
  UNRECOGNIZED = -1,
}

export function superfluidAssetTypeFromJSON(object: any): SuperfluidAssetType {
  switch (object) {
    case 0:
    case "SuperfluidAssetTypeNative":
      return SuperfluidAssetType.SuperfluidAssetTypeNative;
    case 1:
    case "SuperfluidAssetTypeLPShare":
      return SuperfluidAssetType.SuperfluidAssetTypeLPShare;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SuperfluidAssetType.UNRECOGNIZED;
  }
}

export function superfluidAssetTypeToJSON(object: SuperfluidAssetType): string {
  switch (object) {
    case SuperfluidAssetType.SuperfluidAssetTypeNative:
      return "SuperfluidAssetTypeNative";
    case SuperfluidAssetType.SuperfluidAssetTypeLPShare:
      return "SuperfluidAssetTypeLPShare";
    default:
      return "UNKNOWN";
  }
}

/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAsset {
  denom: string;
  assetType: SuperfluidAssetType;
}

/** SuperfluidIntermediaryAccount takes the role of intermediary between LP token and OSMO tokens for superfluid staking */
export interface SuperfluidIntermediaryAccount {
  denom: string;
  valAddr: string;
  /** id of perpetual gauge to send rewards to for distribution */
  gaugeId: Long;
}

function createBaseSuperfluidAsset(): SuperfluidAsset {
  return { denom: "", assetType: 0 };
}

export const SuperfluidAsset = {
  encode(
    message: SuperfluidAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.assetType !== 0) {
      writer.uint32(16).int32(message.assetType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.assetType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidAsset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      assetType: isSet(object.assetType)
        ? superfluidAssetTypeFromJSON(object.assetType)
        : 0,
    };
  },

  toJSON(message: SuperfluidAsset): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.assetType !== undefined &&
      (obj.assetType = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SuperfluidAsset>, I>>(
    object: I
  ): SuperfluidAsset {
    const message = createBaseSuperfluidAsset();
    message.denom = object.denom ?? "";
    message.assetType = object.assetType ?? 0;
    return message;
  },
};

function createBaseSuperfluidIntermediaryAccount(): SuperfluidIntermediaryAccount {
  return { denom: "", valAddr: "", gaugeId: Long.UZERO };
}

export const SuperfluidIntermediaryAccount = {
  encode(
    message: SuperfluidIntermediaryAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }
    if (!message.gaugeId.isZero()) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuperfluidIntermediaryAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.valAddr = reader.string();
          break;
        case 3:
          message.gaugeId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidIntermediaryAccount {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      gaugeId: isSet(object.gaugeId)
        ? Long.fromString(object.gaugeId)
        : Long.UZERO,
    };
  },

  toJSON(message: SuperfluidIntermediaryAccount): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.gaugeId !== undefined &&
      (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SuperfluidIntermediaryAccount>, I>>(
    object: I
  ): SuperfluidIntermediaryAccount {
    const message = createBaseSuperfluidIntermediaryAccount();
    message.denom = object.denom ?? "";
    message.valAddr = object.valAddr ?? "";
    message.gaugeId =
      object.gaugeId !== undefined && object.gaugeId !== null
        ? Long.fromValue(object.gaugeId)
        : Long.UZERO;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
