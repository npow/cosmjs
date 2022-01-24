/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "osmosis.gamm.v1beta1";

export interface PoolAsset {
  /**
   * Coins we are talking about,
   * the denomination must be unique amongst all PoolAssets for this pool.
   */
  token?: Coin;
  /** Weight that is not normalized. This weight must be less than 2^50 */
  weight: string;
}

function createBasePoolAsset(): PoolAsset {
  return { token: undefined, weight: "" };
}

export const PoolAsset = {
  encode(
    message: PoolAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolAsset {
    return {
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      weight: isSet(object.weight) ? String(object.weight) : "",
    };
  },

  toJSON(message: PoolAsset): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolAsset>, I>>(
    object: I
  ): PoolAsset {
    const message = createBasePoolAsset();
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromPartial(object.token)
        : undefined;
    message.weight = object.weight ?? "";
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
