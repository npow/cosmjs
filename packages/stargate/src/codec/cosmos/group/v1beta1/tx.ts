/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Choice, Member, choiceFromJSON, choiceToJSON } from "../../../cosmos/group/v1beta1/types";

export const protobufPackage = "cosmos.group.v1beta1";

/** Exec defines modes of execution of a proposal on creation or on new vote. */
export enum Exec {
  /**
   * EXEC_UNSPECIFIED - An empty value means that there should be a separate
   * MsgExec request for the proposal to execute.
   */
  EXEC_UNSPECIFIED = 0,
  /**
   * EXEC_TRY - Try to execute the proposal immediately.
   * If the proposal is not allowed per the DecisionPolicy,
   * the proposal will still be open and could
   * be executed at a later point.
   */
  EXEC_TRY = 1,
  UNRECOGNIZED = -1,
}

export function execFromJSON(object: any): Exec {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;
    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}

export function execToJSON(object: Exec): string {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";
    case Exec.EXEC_TRY:
      return "EXEC_TRY";
    default:
      return "UNKNOWN";
  }
}

/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
  /** admin is the account address of the group admin. */
  admin: string;
  /** members defines the group members. */
  members: Member[];
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: Uint8Array;
}

/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
  /** group_id is the unique ID of the newly created group. */
  groupId: Long;
}

/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  memberUpdates: Member[];
}

/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {}

/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
  /** admin is the current account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** new_admin is the group new admin account address. */
  newAdmin: string;
}

/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {}

/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** metadata is the updated group's metadata. */
  metadata: Uint8Array;
}

/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {}

/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** metadata is any arbitrary metadata attached to the group policy. */
  metadata: Uint8Array;
  /** decision_policy specifies the group policy's decision policy. */
  decisionPolicy?: Any;
}

/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
  /** address is the account address of the newly created group policy. */
  address: string;
}

/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
  /** admin is the account address of the group admin. */
  admin: string;
  /** address is the account address of the group policy. */
  address: string;
  /** new_admin is the new group policy admin. */
  newAdmin: string;
}

/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {}

/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** address is the account address of group policy. */
  address: string;
  /** decision_policy is the updated group policy's decision policy. */
  decisionPolicy?: Any;
}

/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {}

/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** address is the account address of group policy. */
  address: string;
  /** metadata is the updated group policy metadata. */
  metadata: Uint8Array;
}

/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {}

/** MsgCreateProposal is the Msg/CreateProposal request type. */
export interface MsgCreateProposal {
  /** address is the account address of group policy. */
  address: string;
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];
  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata: Uint8Array;
  /** msgs is a list of Msgs that will be executed if the proposal passes. */
  msgs: Any[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
}

/** MsgCreateProposalResponse is the Msg/CreateProposal response type. */
export interface MsgCreateProposalResponse {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
}

/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** voter is the voter account address. */
  voter: string;
  /** choice is the voter's choice on the proposal. */
  choice: Choice;
  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata: Uint8Array;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}

/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {}

/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** signer is the account address used to execute the proposal. */
  signer: string;
}

/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {}

const baseMsgCreateGroup: object = { admin: "" };

export const MsgCreateGroup = {
  encode(message: MsgCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGroup } as MsgCreateGroup;
    message.members = [];
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroup {
    const message = { ...baseMsgCreateGroup } as MsgCreateGroup;
    message.members = [];
    message.metadata = new Uint8Array();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(Member.fromJSON(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },

  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map((e) => (e ? Member.toJSON(e) : undefined));
    } else {
      obj.members = [];
    }
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroup>): MsgCreateGroup {
    const message = { ...baseMsgCreateGroup } as MsgCreateGroup;
    message.members = [];
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(Member.fromPartial(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    return message;
  },
};

const baseMsgCreateGroupResponse: object = { groupId: Long.UZERO };

export const MsgCreateGroupResponse = {
  encode(message: MsgCreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGroupResponse } as MsgCreateGroupResponse;
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

  fromJSON(object: any): MsgCreateGroupResponse {
    const message = { ...baseMsgCreateGroupResponse } as MsgCreateGroupResponse;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Long.fromString(object.groupId);
    } else {
      message.groupId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    const message = { ...baseMsgCreateGroupResponse } as MsgCreateGroupResponse;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId as Long;
    } else {
      message.groupId = Long.UZERO;
    }
    return message;
  },
};

const baseMsgUpdateGroupMembers: object = { admin: "", groupId: Long.UZERO };

export const MsgUpdateGroupMembers = {
  encode(message: MsgUpdateGroupMembers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    for (const v of message.memberUpdates) {
      Member.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupMembers } as MsgUpdateGroupMembers;
    message.memberUpdates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64() as Long;
          break;
        case 3:
          message.memberUpdates.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMembers {
    const message = { ...baseMsgUpdateGroupMembers } as MsgUpdateGroupMembers;
    message.memberUpdates = [];
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Long.fromString(object.groupId);
    } else {
      message.groupId = Long.UZERO;
    }
    if (object.memberUpdates !== undefined && object.memberUpdates !== null) {
      for (const e of object.memberUpdates) {
        message.memberUpdates.push(Member.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateGroupMembers): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    if (message.memberUpdates) {
      obj.memberUpdates = message.memberUpdates.map((e) => (e ? Member.toJSON(e) : undefined));
    } else {
      obj.memberUpdates = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers {
    const message = { ...baseMsgUpdateGroupMembers } as MsgUpdateGroupMembers;
    message.memberUpdates = [];
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId as Long;
    } else {
      message.groupId = Long.UZERO;
    }
    if (object.memberUpdates !== undefined && object.memberUpdates !== null) {
      for (const e of object.memberUpdates) {
        message.memberUpdates.push(Member.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgUpdateGroupMembersResponse: object = {};

export const MsgUpdateGroupMembersResponse = {
  encode(_: MsgUpdateGroupMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupMembersResponse } as MsgUpdateGroupMembersResponse;
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

  fromJSON(_: any): MsgUpdateGroupMembersResponse {
    const message = { ...baseMsgUpdateGroupMembersResponse } as MsgUpdateGroupMembersResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupMembersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse {
    const message = { ...baseMsgUpdateGroupMembersResponse } as MsgUpdateGroupMembersResponse;
    return message;
  },
};

const baseMsgUpdateGroupAdmin: object = { admin: "", groupId: Long.UZERO, newAdmin: "" };

export const MsgUpdateGroupAdmin = {
  encode(message: MsgUpdateGroupAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupAdmin } as MsgUpdateGroupAdmin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64() as Long;
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupAdmin {
    const message = { ...baseMsgUpdateGroupAdmin } as MsgUpdateGroupAdmin;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Long.fromString(object.groupId);
    } else {
      message.groupId = Long.UZERO;
    }
    if (object.newAdmin !== undefined && object.newAdmin !== null) {
      message.newAdmin = String(object.newAdmin);
    } else {
      message.newAdmin = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateGroupAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin {
    const message = { ...baseMsgUpdateGroupAdmin } as MsgUpdateGroupAdmin;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId as Long;
    } else {
      message.groupId = Long.UZERO;
    }
    if (object.newAdmin !== undefined && object.newAdmin !== null) {
      message.newAdmin = object.newAdmin;
    } else {
      message.newAdmin = "";
    }
    return message;
  },
};

const baseMsgUpdateGroupAdminResponse: object = {};

export const MsgUpdateGroupAdminResponse = {
  encode(_: MsgUpdateGroupAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupAdminResponse } as MsgUpdateGroupAdminResponse;
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

  fromJSON(_: any): MsgUpdateGroupAdminResponse {
    const message = { ...baseMsgUpdateGroupAdminResponse } as MsgUpdateGroupAdminResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse {
    const message = { ...baseMsgUpdateGroupAdminResponse } as MsgUpdateGroupAdminResponse;
    return message;
  },
};

const baseMsgUpdateGroupMetadata: object = { admin: "", groupId: Long.UZERO };

export const MsgUpdateGroupMetadata = {
  encode(message: MsgUpdateGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupMetadata } as MsgUpdateGroupMetadata;
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64() as Long;
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMetadata {
    const message = { ...baseMsgUpdateGroupMetadata } as MsgUpdateGroupMetadata;
    message.metadata = new Uint8Array();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Long.fromString(object.groupId);
    } else {
      message.groupId = Long.UZERO;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },

  toJSON(message: MsgUpdateGroupMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata {
    const message = { ...baseMsgUpdateGroupMetadata } as MsgUpdateGroupMetadata;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId as Long;
    } else {
      message.groupId = Long.UZERO;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    return message;
  },
};

const baseMsgUpdateGroupMetadataResponse: object = {};

export const MsgUpdateGroupMetadataResponse = {
  encode(_: MsgUpdateGroupMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupMetadataResponse } as MsgUpdateGroupMetadataResponse;
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

  fromJSON(_: any): MsgUpdateGroupMetadataResponse {
    const message = { ...baseMsgUpdateGroupMetadataResponse } as MsgUpdateGroupMetadataResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse {
    const message = { ...baseMsgUpdateGroupMetadataResponse } as MsgUpdateGroupMetadataResponse;
    return message;
  },
};

const baseMsgCreateGroupPolicy: object = { admin: "", groupId: Long.UZERO };

export const MsgCreateGroupPolicy = {
  encode(message: MsgCreateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGroupPolicy } as MsgCreateGroupPolicy;
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64() as Long;
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        case 4:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupPolicy {
    const message = { ...baseMsgCreateGroupPolicy } as MsgCreateGroupPolicy;
    message.metadata = new Uint8Array();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Long.fromString(object.groupId);
    } else {
      message.groupId = Long.UZERO;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = Any.fromJSON(object.decisionPolicy);
    } else {
      message.decisionPolicy = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateGroupPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroupPolicy>): MsgCreateGroupPolicy {
    const message = { ...baseMsgCreateGroupPolicy } as MsgCreateGroupPolicy;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId as Long;
    } else {
      message.groupId = Long.UZERO;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = Any.fromPartial(object.decisionPolicy);
    } else {
      message.decisionPolicy = undefined;
    }
    return message;
  },
};

const baseMsgCreateGroupPolicyResponse: object = { address: "" };

export const MsgCreateGroupPolicyResponse = {
  encode(message: MsgCreateGroupPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGroupPolicyResponse } as MsgCreateGroupPolicyResponse;
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

  fromJSON(object: any): MsgCreateGroupPolicyResponse {
    const message = { ...baseMsgCreateGroupPolicyResponse } as MsgCreateGroupPolicyResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgCreateGroupPolicyResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroupPolicyResponse>): MsgCreateGroupPolicyResponse {
    const message = { ...baseMsgCreateGroupPolicyResponse } as MsgCreateGroupPolicyResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgUpdateGroupPolicyAdmin: object = { admin: "", address: "", newAdmin: "" };

export const MsgUpdateGroupPolicyAdmin = {
  encode(message: MsgUpdateGroupPolicyAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupPolicyAdmin } as MsgUpdateGroupPolicyAdmin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyAdmin {
    const message = { ...baseMsgUpdateGroupPolicyAdmin } as MsgUpdateGroupPolicyAdmin;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.newAdmin !== undefined && object.newAdmin !== null) {
      message.newAdmin = String(object.newAdmin);
    } else {
      message.newAdmin = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateGroupPolicyAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyAdmin>): MsgUpdateGroupPolicyAdmin {
    const message = { ...baseMsgUpdateGroupPolicyAdmin } as MsgUpdateGroupPolicyAdmin;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.newAdmin !== undefined && object.newAdmin !== null) {
      message.newAdmin = object.newAdmin;
    } else {
      message.newAdmin = "";
    }
    return message;
  },
};

const baseMsgUpdateGroupPolicyAdminResponse: object = {};

export const MsgUpdateGroupPolicyAdminResponse = {
  encode(_: MsgUpdateGroupPolicyAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupPolicyAdminResponse } as MsgUpdateGroupPolicyAdminResponse;
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

  fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse {
    const message = { ...baseMsgUpdateGroupPolicyAdminResponse } as MsgUpdateGroupPolicyAdminResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyAdminResponse>): MsgUpdateGroupPolicyAdminResponse {
    const message = { ...baseMsgUpdateGroupPolicyAdminResponse } as MsgUpdateGroupPolicyAdminResponse;
    return message;
  },
};

const baseMsgUpdateGroupPolicyDecisionPolicy: object = { admin: "", address: "" };

export const MsgUpdateGroupPolicyDecisionPolicy = {
  encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupPolicyDecisionPolicy } as MsgUpdateGroupPolicyDecisionPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy {
    const message = { ...baseMsgUpdateGroupPolicyDecisionPolicy } as MsgUpdateGroupPolicyDecisionPolicy;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = Any.fromJSON(object.decisionPolicy);
    } else {
      message.decisionPolicy = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>): MsgUpdateGroupPolicyDecisionPolicy {
    const message = { ...baseMsgUpdateGroupPolicyDecisionPolicy } as MsgUpdateGroupPolicyDecisionPolicy;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = Any.fromPartial(object.decisionPolicy);
    } else {
      message.decisionPolicy = undefined;
    }
    return message;
  },
};

const baseMsgUpdateGroupPolicyDecisionPolicyResponse: object = {};

export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
  encode(
    _: MsgUpdateGroupPolicyDecisionPolicyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateGroupPolicyDecisionPolicyResponse,
    } as MsgUpdateGroupPolicyDecisionPolicyResponse;
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

  fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const message = {
      ...baseMsgUpdateGroupPolicyDecisionPolicyResponse,
    } as MsgUpdateGroupPolicyDecisionPolicyResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateGroupPolicyDecisionPolicyResponse>,
  ): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const message = {
      ...baseMsgUpdateGroupPolicyDecisionPolicyResponse,
    } as MsgUpdateGroupPolicyDecisionPolicyResponse;
    return message;
  },
};

const baseMsgUpdateGroupPolicyMetadata: object = { admin: "", address: "" };

export const MsgUpdateGroupPolicyMetadata = {
  encode(message: MsgUpdateGroupPolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupPolicyMetadata } as MsgUpdateGroupPolicyMetadata;
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyMetadata {
    const message = { ...baseMsgUpdateGroupPolicyMetadata } as MsgUpdateGroupPolicyMetadata;
    message.metadata = new Uint8Array();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },

  toJSON(message: MsgUpdateGroupPolicyMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyMetadata>): MsgUpdateGroupPolicyMetadata {
    const message = { ...baseMsgUpdateGroupPolicyMetadata } as MsgUpdateGroupPolicyMetadata;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    return message;
  },
};

const baseMsgUpdateGroupPolicyMetadataResponse: object = {};

export const MsgUpdateGroupPolicyMetadataResponse = {
  encode(_: MsgUpdateGroupPolicyMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupPolicyMetadataResponse } as MsgUpdateGroupPolicyMetadataResponse;
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

  fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse {
    const message = { ...baseMsgUpdateGroupPolicyMetadataResponse } as MsgUpdateGroupPolicyMetadataResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyMetadataResponse>): MsgUpdateGroupPolicyMetadataResponse {
    const message = { ...baseMsgUpdateGroupPolicyMetadataResponse } as MsgUpdateGroupPolicyMetadataResponse;
    return message;
  },
};

const baseMsgCreateProposal: object = { address: "", proposers: "", exec: 0 };

export const MsgCreateProposal = {
  encode(message: MsgCreateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.proposers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateProposal } as MsgCreateProposal;
    message.proposers = [];
    message.msgs = [];
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.proposers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        case 4:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.exec = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProposal {
    const message = { ...baseMsgCreateProposal } as MsgCreateProposal;
    message.proposers = [];
    message.msgs = [];
    message.metadata = new Uint8Array();
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.proposers !== undefined && object.proposers !== null) {
      for (const e of object.proposers) {
        message.proposers.push(String(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.msgs !== undefined && object.msgs !== null) {
      for (const e of object.msgs) {
        message.msgs.push(Any.fromJSON(e));
      }
    }
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = execFromJSON(object.exec);
    } else {
      message.exec = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateProposal): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.proposers) {
      obj.proposers = message.proposers.map((e) => e);
    } else {
      obj.proposers = [];
    }
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.msgs = [];
    }
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProposal>): MsgCreateProposal {
    const message = { ...baseMsgCreateProposal } as MsgCreateProposal;
    message.proposers = [];
    message.msgs = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.proposers !== undefined && object.proposers !== null) {
      for (const e of object.proposers) {
        message.proposers.push(e);
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    if (object.msgs !== undefined && object.msgs !== null) {
      for (const e of object.msgs) {
        message.msgs.push(Any.fromPartial(e));
      }
    }
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = object.exec;
    } else {
      message.exec = 0;
    }
    return message;
  },
};

const baseMsgCreateProposalResponse: object = { proposalId: Long.UZERO };

export const MsgCreateProposalResponse = {
  encode(message: MsgCreateProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateProposalResponse } as MsgCreateProposalResponse;
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

  fromJSON(object: any): MsgCreateProposalResponse {
    const message = { ...baseMsgCreateProposalResponse } as MsgCreateProposalResponse;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MsgCreateProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProposalResponse>): MsgCreateProposalResponse {
    const message = { ...baseMsgCreateProposalResponse } as MsgCreateProposalResponse;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },
};

const baseMsgVote: object = { proposalId: Long.UZERO, voter: "", choice: 0, exec: 0 };

export const MsgVote = {
  encode(message: MsgVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.choice !== 0) {
      writer.uint32(24).int32(message.choice);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata);
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVote } as MsgVote;
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.choice = reader.int32() as any;
          break;
        case 4:
          message.metadata = reader.bytes();
          break;
        case 5:
          message.exec = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVote {
    const message = { ...baseMsgVote } as MsgVote;
    message.metadata = new Uint8Array();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.choice !== undefined && object.choice !== null) {
      message.choice = choiceFromJSON(object.choice);
    } else {
      message.choice = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = execFromJSON(object.exec);
    } else {
      message.exec = 0;
    }
    return message;
  },

  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.choice !== undefined && (obj.choice = choiceToJSON(message.choice));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = { ...baseMsgVote } as MsgVote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.choice !== undefined && object.choice !== null) {
      message.choice = object.choice;
    } else {
      message.choice = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = object.exec;
    } else {
      message.exec = 0;
    }
    return message;
  },
};

const baseMsgVoteResponse: object = {};

export const MsgVoteResponse = {
  encode(_: MsgVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse;
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

  fromJSON(_: any): MsgVoteResponse {
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse;
    return message;
  },

  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse;
    return message;
  },
};

const baseMsgExec: object = { proposalId: Long.UZERO, signer: "" };

export const MsgExec = {
  encode(message: MsgExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExec } as MsgExec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExec {
    const message = { ...baseMsgExec } as MsgExec;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExec>): MsgExec {
    const message = { ...baseMsgExec } as MsgExec;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgExecResponse: object = {};

export const MsgExecResponse = {
  encode(_: MsgExecResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExecResponse } as MsgExecResponse;
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

  fromJSON(_: any): MsgExecResponse {
    const message = { ...baseMsgExecResponse } as MsgExecResponse;
    return message;
  },

  toJSON(_: MsgExecResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgExecResponse>): MsgExecResponse {
    const message = { ...baseMsgExecResponse } as MsgExecResponse;
    return message;
  },
};

/** Msg is the cosmos.group.v1beta1 Msg service. */
export interface Msg {
  /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
  /** UpdateGroupMembers updates the group members with given group id and admin address. */
  UpdateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse>;
  /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  UpdateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse>;
  /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  UpdateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse>;
  /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  CreateGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponse>;
  /** UpdateGroupPolicyAdmin updates a group policy admin. */
  UpdateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponse>;
  /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  UpdateGroupPolicyDecisionPolicy(
    request: MsgUpdateGroupPolicyDecisionPolicy,
  ): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
  /** UpdateGroupPolicyMetadata updates a group policy metadata. */
  UpdateGroupPolicyMetadata(
    request: MsgUpdateGroupPolicyMetadata,
  ): Promise<MsgUpdateGroupPolicyMetadataResponse>;
  /** CreateProposal submits a new proposal. */
  CreateProposal(request: MsgCreateProposal): Promise<MsgCreateProposalResponse>;
  /** Vote allows a voter to vote on a proposal. */
  Vote(request: MsgVote): Promise<MsgVoteResponse>;
  /** Exec executes a proposal. */
  Exec(request: MsgExec): Promise<MsgExecResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse> {
    const data = MsgCreateGroup.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1beta1.Msg", "CreateGroup", data);
    return promise.then((data) => MsgCreateGroupResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse> {
    const data = MsgUpdateGroupMembers.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1beta1.Msg", "UpdateGroupMembers", data);
    return promise.then((data) => MsgUpdateGroupMembersResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse> {
    const data = MsgUpdateGroupAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1beta1.Msg", "UpdateGroupAdmin", data);
    return promise.then((data) => MsgUpdateGroupAdminResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse> {
    const data = MsgUpdateGroupMetadata.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1beta1.Msg", "UpdateGroupMetadata", data);
    return promise.then((data) => MsgUpdateGroupMetadataResponse.decode(new _m0.Reader(data)));
  }

  CreateGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponse> {
    const data = MsgCreateGroupPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1beta1.Msg", "CreateGroupPolicy", data);
    return promise.then((data) => MsgCreateGroupPolicyResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponse> {
    const data = MsgUpdateGroupPolicyAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1beta1.Msg", "UpdateGroupPolicyAdmin", data);
    return promise.then((data) => MsgUpdateGroupPolicyAdminResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupPolicyDecisionPolicy(
    request: MsgUpdateGroupPolicyDecisionPolicy,
  ): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    const data = MsgUpdateGroupPolicyDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1beta1.Msg", "UpdateGroupPolicyDecisionPolicy", data);
    return promise.then((data) => MsgUpdateGroupPolicyDecisionPolicyResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupPolicyMetadata(
    request: MsgUpdateGroupPolicyMetadata,
  ): Promise<MsgUpdateGroupPolicyMetadataResponse> {
    const data = MsgUpdateGroupPolicyMetadata.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1beta1.Msg", "UpdateGroupPolicyMetadata", data);
    return promise.then((data) => MsgUpdateGroupPolicyMetadataResponse.decode(new _m0.Reader(data)));
  }

  CreateProposal(request: MsgCreateProposal): Promise<MsgCreateProposalResponse> {
    const data = MsgCreateProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1beta1.Msg", "CreateProposal", data);
    return promise.then((data) => MsgCreateProposalResponse.decode(new _m0.Reader(data)));
  }

  Vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1beta1.Msg", "Vote", data);
    return promise.then((data) => MsgVoteResponse.decode(new _m0.Reader(data)));
  }

  Exec(request: MsgExec): Promise<MsgExecResponse> {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1beta1.Msg", "Exec", data);
    return promise.then((data) => MsgExecResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
