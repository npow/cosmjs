/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FileDescriptorSet } from "../../../google/protobuf/descriptor";

export const protobufPackage = "cosmos.orm.v1alpha1";

/**
 * SchemaDescriptor describes an ORM schema that contains all the information
 * needed for a dynamic client to decode the stored data.
 */
export interface SchemaDescriptor {
  /**
   * files is the set of all FileDescriptorProto's needed to decode the stored data.
   * A schema imposes the constraint that every file and every table within that
   * schema have at most one instance in the store.
   */
  files?: FileDescriptorSet;
  /** modules is the set of modules in the schema. */
  modules: SchemaDescriptor_ModuleEntry[];
}

/** ModuleEntry describes a single module's schema. */
export interface SchemaDescriptor_ModuleEntry {
  /**
   * name is the name of the module. In the multi-store model this name is
   * used to locate the module's store.
   */
  name: string;
  /**
   * prefix is an optional prefix that precedes all keys in this module's
   * store.
   */
  prefix: Uint8Array;
  /** files describes the schema files used in this module. */
  files: SchemaDescriptor_FileEntry[];
}

/** FileEntry describes an ORM file used in a module. */
export interface SchemaDescriptor_FileEntry {
  /**
   * id is a prefix that will be varint encoded and prepended to all the
   * table keys specified in the file's tables.
   */
  id: number;
  /**
   * file_name is the name of a file in the FileDescriptor set that contains
   * table definitions.
   */
  fileName: string;
}

const baseSchemaDescriptor: object = {};

export const SchemaDescriptor = {
  encode(message: SchemaDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.files !== undefined) {
      FileDescriptorSet.encode(message.files, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.modules) {
      SchemaDescriptor_ModuleEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchemaDescriptor } as SchemaDescriptor;
    message.modules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files = FileDescriptorSet.decode(reader, reader.uint32());
          break;
        case 2:
          message.modules.push(SchemaDescriptor_ModuleEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaDescriptor {
    const message = { ...baseSchemaDescriptor } as SchemaDescriptor;
    message.modules = [];
    if (object.files !== undefined && object.files !== null) {
      message.files = FileDescriptorSet.fromJSON(object.files);
    } else {
      message.files = undefined;
    }
    if (object.modules !== undefined && object.modules !== null) {
      for (const e of object.modules) {
        message.modules.push(SchemaDescriptor_ModuleEntry.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: SchemaDescriptor): unknown {
    const obj: any = {};
    message.files !== undefined &&
      (obj.files = message.files ? FileDescriptorSet.toJSON(message.files) : undefined);
    if (message.modules) {
      obj.modules = message.modules.map((e) => (e ? SchemaDescriptor_ModuleEntry.toJSON(e) : undefined));
    } else {
      obj.modules = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaDescriptor>): SchemaDescriptor {
    const message = { ...baseSchemaDescriptor } as SchemaDescriptor;
    message.modules = [];
    if (object.files !== undefined && object.files !== null) {
      message.files = FileDescriptorSet.fromPartial(object.files);
    } else {
      message.files = undefined;
    }
    if (object.modules !== undefined && object.modules !== null) {
      for (const e of object.modules) {
        message.modules.push(SchemaDescriptor_ModuleEntry.fromPartial(e));
      }
    }
    return message;
  },
};

const baseSchemaDescriptor_ModuleEntry: object = { name: "" };

export const SchemaDescriptor_ModuleEntry = {
  encode(message: SchemaDescriptor_ModuleEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    for (const v of message.files) {
      SchemaDescriptor_FileEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaDescriptor_ModuleEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchemaDescriptor_ModuleEntry } as SchemaDescriptor_ModuleEntry;
    message.files = [];
    message.prefix = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.prefix = reader.bytes();
          break;
        case 3:
          message.files.push(SchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaDescriptor_ModuleEntry {
    const message = { ...baseSchemaDescriptor_ModuleEntry } as SchemaDescriptor_ModuleEntry;
    message.files = [];
    message.prefix = new Uint8Array();
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = bytesFromBase64(object.prefix);
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(SchemaDescriptor_FileEntry.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: SchemaDescriptor_ModuleEntry): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.prefix !== undefined &&
      (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    if (message.files) {
      obj.files = message.files.map((e) => (e ? SchemaDescriptor_FileEntry.toJSON(e) : undefined));
    } else {
      obj.files = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaDescriptor_ModuleEntry>): SchemaDescriptor_ModuleEntry {
    const message = { ...baseSchemaDescriptor_ModuleEntry } as SchemaDescriptor_ModuleEntry;
    message.files = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = new Uint8Array();
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(SchemaDescriptor_FileEntry.fromPartial(e));
      }
    }
    return message;
  },
};

const baseSchemaDescriptor_FileEntry: object = { id: 0, fileName: "" };

export const SchemaDescriptor_FileEntry = {
  encode(message: SchemaDescriptor_FileEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.fileName !== "") {
      writer.uint32(18).string(message.fileName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaDescriptor_FileEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchemaDescriptor_FileEntry } as SchemaDescriptor_FileEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.fileName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaDescriptor_FileEntry {
    const message = { ...baseSchemaDescriptor_FileEntry } as SchemaDescriptor_FileEntry;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.fileName !== undefined && object.fileName !== null) {
      message.fileName = String(object.fileName);
    } else {
      message.fileName = "";
    }
    return message;
  },

  toJSON(message: SchemaDescriptor_FileEntry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.fileName !== undefined && (obj.fileName = message.fileName);
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaDescriptor_FileEntry>): SchemaDescriptor_FileEntry {
    const message = { ...baseSchemaDescriptor_FileEntry } as SchemaDescriptor_FileEntry;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.fileName !== undefined && object.fileName !== null) {
      message.fileName = object.fileName;
    } else {
      message.fileName = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
