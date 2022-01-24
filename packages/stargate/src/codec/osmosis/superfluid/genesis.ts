/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../osmosis/superfluid/params";
import {
  SuperfluidAsset,
  SuperfluidIntermediaryAccount,
} from "../../osmosis/superfluid/superfluid";

export const protobufPackage = "osmosis.superfluid";

export interface EpochOsmoEquivalentTWAP {
  epochNumber: Long;
  /** superfluid asset denom, can be LP token or native token */
  denom: string;
  epochTwapPrice: string;
}

/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  params?: Params;
  superfluidAssets: SuperfluidAsset[];
  twapPriceRecords: EpochOsmoEquivalentTWAP[];
  intermediaryAccounts: SuperfluidIntermediaryAccount[];
}

function createBaseEpochOsmoEquivalentTWAP(): EpochOsmoEquivalentTWAP {
  return { epochNumber: Long.ZERO, denom: "", epochTwapPrice: "" };
}

export const EpochOsmoEquivalentTWAP = {
  encode(
    message: EpochOsmoEquivalentTWAP,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.epochTwapPrice !== "") {
      writer.uint32(26).string(message.epochTwapPrice);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EpochOsmoEquivalentTWAP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochOsmoEquivalentTWAP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64() as Long;
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.epochTwapPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochOsmoEquivalentTWAP {
    return {
      epochNumber: isSet(object.epochNumber)
        ? Long.fromString(object.epochNumber)
        : Long.ZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      epochTwapPrice: isSet(object.epochTwapPrice)
        ? String(object.epochTwapPrice)
        : "",
    };
  },

  toJSON(message: EpochOsmoEquivalentTWAP): unknown {
    const obj: any = {};
    message.epochNumber !== undefined &&
      (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.epochTwapPrice !== undefined &&
      (obj.epochTwapPrice = message.epochTwapPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EpochOsmoEquivalentTWAP>, I>>(
    object: I
  ): EpochOsmoEquivalentTWAP {
    const message = createBaseEpochOsmoEquivalentTWAP();
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO;
    message.denom = object.denom ?? "";
    message.epochTwapPrice = object.epochTwapPrice ?? "";
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    superfluidAssets: [],
    twapPriceRecords: [],
    intermediaryAccounts: [],
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.superfluidAssets) {
      SuperfluidAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.twapPriceRecords) {
      EpochOsmoEquivalentTWAP.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.intermediaryAccounts) {
      SuperfluidIntermediaryAccount.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.superfluidAssets.push(
            SuperfluidAsset.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.twapPriceRecords.push(
            EpochOsmoEquivalentTWAP.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.intermediaryAccounts.push(
            SuperfluidIntermediaryAccount.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      superfluidAssets: Array.isArray(object?.superfluidAssets)
        ? object.superfluidAssets.map((e: any) => SuperfluidAsset.fromJSON(e))
        : [],
      twapPriceRecords: Array.isArray(object?.twapPriceRecords)
        ? object.twapPriceRecords.map((e: any) =>
            EpochOsmoEquivalentTWAP.fromJSON(e)
          )
        : [],
      intermediaryAccounts: Array.isArray(object?.intermediaryAccounts)
        ? object.intermediaryAccounts.map((e: any) =>
            SuperfluidIntermediaryAccount.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.superfluidAssets) {
      obj.superfluidAssets = message.superfluidAssets.map((e) =>
        e ? SuperfluidAsset.toJSON(e) : undefined
      );
    } else {
      obj.superfluidAssets = [];
    }
    if (message.twapPriceRecords) {
      obj.twapPriceRecords = message.twapPriceRecords.map((e) =>
        e ? EpochOsmoEquivalentTWAP.toJSON(e) : undefined
      );
    } else {
      obj.twapPriceRecords = [];
    }
    if (message.intermediaryAccounts) {
      obj.intermediaryAccounts = message.intermediaryAccounts.map((e) =>
        e ? SuperfluidIntermediaryAccount.toJSON(e) : undefined
      );
    } else {
      obj.intermediaryAccounts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.superfluidAssets =
      object.superfluidAssets?.map((e) => SuperfluidAsset.fromPartial(e)) || [];
    message.twapPriceRecords =
      object.twapPriceRecords?.map((e) =>
        EpochOsmoEquivalentTWAP.fromPartial(e)
      ) || [];
    message.intermediaryAccounts =
      object.intermediaryAccounts?.map((e) =>
        SuperfluidIntermediaryAccount.fromPartial(e)
      ) || [];
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
