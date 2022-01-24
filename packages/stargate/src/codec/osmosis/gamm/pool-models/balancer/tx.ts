/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BalancerPoolParams } from "../../../../osmosis/gamm/pool-models/balancer/balancerPool";
import { PoolAsset } from "../../../../osmosis/gamm/v1beta1/pool";

export const protobufPackage = "osmosis.gamm.poolmodels";

/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
  sender: string;
  poolParams?: BalancerPoolParams;
  poolAssets: PoolAsset[];
  futurePoolGovernor: string;
}

export interface MsgCreateBalancerPoolResponse {}

function createBaseMsgCreateBalancerPool(): MsgCreateBalancerPool {
  return {
    sender: "",
    poolParams: undefined,
    poolAssets: [],
    futurePoolGovernor: "",
  };
}

export const MsgCreateBalancerPool = {
  encode(
    message: MsgCreateBalancerPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolParams !== undefined) {
      BalancerPoolParams.encode(
        message.poolParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.futurePoolGovernor !== "") {
      writer.uint32(34).string(message.futurePoolGovernor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateBalancerPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolParams = BalancerPoolParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.futurePoolGovernor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBalancerPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolParams: isSet(object.poolParams)
        ? BalancerPoolParams.fromJSON(object.poolParams)
        : undefined,
      poolAssets: Array.isArray(object?.poolAssets)
        ? object.poolAssets.map((e: any) => PoolAsset.fromJSON(e))
        : [],
      futurePoolGovernor: isSet(object.futurePoolGovernor)
        ? String(object.futurePoolGovernor)
        : "",
    };
  },

  toJSON(message: MsgCreateBalancerPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolParams !== undefined &&
      (obj.poolParams = message.poolParams
        ? BalancerPoolParams.toJSON(message.poolParams)
        : undefined);
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map((e) =>
        e ? PoolAsset.toJSON(e) : undefined
      );
    } else {
      obj.poolAssets = [];
    }
    message.futurePoolGovernor !== undefined &&
      (obj.futurePoolGovernor = message.futurePoolGovernor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBalancerPool>, I>>(
    object: I
  ): MsgCreateBalancerPool {
    const message = createBaseMsgCreateBalancerPool();
    message.sender = object.sender ?? "";
    message.poolParams =
      object.poolParams !== undefined && object.poolParams !== null
        ? BalancerPoolParams.fromPartial(object.poolParams)
        : undefined;
    message.poolAssets =
      object.poolAssets?.map((e) => PoolAsset.fromPartial(e)) || [];
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    return message;
  },
};

function createBaseMsgCreateBalancerPoolResponse(): MsgCreateBalancerPoolResponse {
  return {};
}

export const MsgCreateBalancerPoolResponse = {
  encode(
    _: MsgCreateBalancerPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateBalancerPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateBalancerPoolResponse {
    return {};
  },

  toJSON(_: MsgCreateBalancerPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBalancerPoolResponse>, I>>(
    _: I
  ): MsgCreateBalancerPoolResponse {
    const message = createBaseMsgCreateBalancerPoolResponse();
    return message;
  },
};

export interface Msg {
  CreateBalancerPool(
    request: MsgCreateBalancerPool
  ): Promise<MsgCreateBalancerPoolResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateBalancerPool = this.CreateBalancerPool.bind(this);
  }
  CreateBalancerPool(
    request: MsgCreateBalancerPool
  ): Promise<MsgCreateBalancerPoolResponse> {
    const data = MsgCreateBalancerPool.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.gamm.poolmodels.Msg",
      "CreateBalancerPool",
      data
    );
    return promise.then((data) =>
      MsgCreateBalancerPoolResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
