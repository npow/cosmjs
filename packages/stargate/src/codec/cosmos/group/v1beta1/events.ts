/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.group.v1beta1";

/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}

/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}

/** EventCreateProposal is an event emitted when a proposal is created. */
export interface EventCreateProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

const baseEventCreateGroup: object = { groupId: Long.UZERO };

export const EventCreateGroup = {
  encode(message: EventCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreateGroup } as EventCreateGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateGroup {
    const message = { ...baseEventCreateGroup } as EventCreateGroup;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Long.fromString(object.groupId);
    } else {
      message.groupId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreateGroup>): EventCreateGroup {
    const message = { ...baseEventCreateGroup } as EventCreateGroup;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId as Long;
    } else {
      message.groupId = Long.UZERO;
    }
    return message;
  },
};

const baseEventUpdateGroup: object = { groupId: Long.UZERO };

export const EventUpdateGroup = {
  encode(message: EventUpdateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventUpdateGroup } as EventUpdateGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateGroup {
    const message = { ...baseEventUpdateGroup } as EventUpdateGroup;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Long.fromString(object.groupId);
    } else {
      message.groupId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: EventUpdateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateGroup>): EventUpdateGroup {
    const message = { ...baseEventUpdateGroup } as EventUpdateGroup;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId as Long;
    } else {
      message.groupId = Long.UZERO;
    }
    return message;
  },
};

const baseEventCreateGroupPolicy: object = { address: "" };

export const EventCreateGroupPolicy = {
  encode(message: EventCreateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreateGroupPolicy } as EventCreateGroupPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateGroupPolicy {
    const message = { ...baseEventCreateGroupPolicy } as EventCreateGroupPolicy;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: EventCreateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreateGroupPolicy>): EventCreateGroupPolicy {
    const message = { ...baseEventCreateGroupPolicy } as EventCreateGroupPolicy;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseEventUpdateGroupPolicy: object = { address: "" };

export const EventUpdateGroupPolicy = {
  encode(message: EventUpdateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventUpdateGroupPolicy } as EventUpdateGroupPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateGroupPolicy {
    const message = { ...baseEventUpdateGroupPolicy } as EventUpdateGroupPolicy;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: EventUpdateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy {
    const message = { ...baseEventUpdateGroupPolicy } as EventUpdateGroupPolicy;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseEventCreateProposal: object = { proposalId: Long.UZERO };

export const EventCreateProposal = {
  encode(message: EventCreateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreateProposal } as EventCreateProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateProposal {
    const message = { ...baseEventCreateProposal } as EventCreateProposal;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: EventCreateProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreateProposal>): EventCreateProposal {
    const message = { ...baseEventCreateProposal } as EventCreateProposal;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },
};

const baseEventVote: object = { proposalId: Long.UZERO };

export const EventVote = {
  encode(message: EventVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventVote } as EventVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVote {
    const message = { ...baseEventVote } as EventVote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: EventVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventVote>): EventVote {
    const message = { ...baseEventVote } as EventVote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },
};

const baseEventExec: object = { proposalId: Long.UZERO };

export const EventExec = {
  encode(message: EventExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventExec } as EventExec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExec {
    const message = { ...baseEventExec } as EventExec;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: EventExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventExec>): EventExec {
    const message = { ...baseEventExec } as EventExec;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },
};

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
