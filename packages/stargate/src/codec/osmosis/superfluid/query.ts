/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  SuperfluidAssetType,
  SuperfluidAsset,
  superfluidAssetTypeFromJSON,
  superfluidAssetTypeToJSON,
} from "../../osmosis/superfluid/superfluid";

export const protobufPackage = "osmosis.superfluid";

export interface AssetTypeRequest {
  denom: string;
}

export interface AssetTypeResponse {
  assetType: SuperfluidAssetType;
}

export interface AllAssetsRequest {}

export interface AllAssetsResponse {
  assets: SuperfluidAsset[];
}

function createBaseAssetTypeRequest(): AssetTypeRequest {
  return { denom: "" };
}

export const AssetTypeRequest = {
  encode(
    message: AssetTypeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetTypeRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: AssetTypeRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetTypeRequest>, I>>(
    object: I
  ): AssetTypeRequest {
    const message = createBaseAssetTypeRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseAssetTypeResponse(): AssetTypeResponse {
  return { assetType: 0 };
}

export const AssetTypeResponse = {
  encode(
    message: AssetTypeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetType !== 0) {
      writer.uint32(8).int32(message.assetType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetTypeResponse {
    return {
      assetType: isSet(object.assetType)
        ? superfluidAssetTypeFromJSON(object.assetType)
        : 0,
    };
  },

  toJSON(message: AssetTypeResponse): unknown {
    const obj: any = {};
    message.assetType !== undefined &&
      (obj.assetType = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetTypeResponse>, I>>(
    object: I
  ): AssetTypeResponse {
    const message = createBaseAssetTypeResponse();
    message.assetType = object.assetType ?? 0;
    return message;
  },
};

function createBaseAllAssetsRequest(): AllAssetsRequest {
  return {};
}

export const AllAssetsRequest = {
  encode(
    _: AllAssetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsRequest();
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

  fromJSON(_: any): AllAssetsRequest {
    return {};
  },

  toJSON(_: AllAssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllAssetsRequest>, I>>(
    _: I
  ): AllAssetsRequest {
    const message = createBaseAllAssetsRequest();
    return message;
  },
};

function createBaseAllAssetsResponse(): AllAssetsResponse {
  return { assets: [] };
}

export const AllAssetsResponse = {
  encode(
    message: AllAssetsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assets) {
      SuperfluidAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllAssetsResponse {
    return {
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => SuperfluidAsset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AllAssetsResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) =>
        e ? SuperfluidAsset.toJSON(e) : undefined
      );
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllAssetsResponse>, I>>(
    object: I
  ): AllAssetsResponse {
    const message = createBaseAllAssetsResponse();
    message.assets =
      object.assets?.map((e) => SuperfluidAsset.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns superfluid asset type */
  AssetType(request: AssetTypeRequest): Promise<AssetTypeResponse>;
  /** Returns all superfluid assets info */
  AllAssets(request: AllAssetsRequest): Promise<AllAssetsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AssetType = this.AssetType.bind(this);
    this.AllAssets = this.AllAssets.bind(this);
  }
  AssetType(request: AssetTypeRequest): Promise<AssetTypeResponse> {
    const data = AssetTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "AssetType",
      data
    );
    return promise.then((data) =>
      AssetTypeResponse.decode(new _m0.Reader(data))
    );
  }

  AllAssets(request: AllAssetsRequest): Promise<AllAssetsResponse> {
    const data = AllAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "AllAssets",
      data
    );
    return promise.then((data) =>
      AllAssetsResponse.decode(new _m0.Reader(data))
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
