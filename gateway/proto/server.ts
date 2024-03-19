/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "gateway";

export interface InstallRequest {
  cid: string;
  uri: string;
}

export interface InstallResponse {
}

export interface InvokeRequest {
  functionId: string;
  method: string;
  callData: string;
}

export interface InvokeResponse {
  code: string;
  requestId: string;
  result: string;
  usage: InvokeUsage | undefined;
}

export interface InvokeUsage {
}

function createBaseInstallRequest(): InstallRequest {
  return { cid: "", uri: "" };
}

export const InstallRequest = {
  encode(message: InstallRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstallRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstallRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstallRequest {
    return {
      cid: isSet(object.cid) ? globalThis.String(object.cid) : "",
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
    };
  },

  toJSON(message: InstallRequest): unknown {
    const obj: any = {};
    if (message.cid !== "") {
      obj.cid = message.cid;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InstallRequest>, I>>(base?: I): InstallRequest {
    return InstallRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InstallRequest>, I>>(object: I): InstallRequest {
    const message = createBaseInstallRequest();
    message.cid = object.cid ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
};

function createBaseInstallResponse(): InstallResponse {
  return {};
}

export const InstallResponse = {
  encode(_: InstallResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstallResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstallResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): InstallResponse {
    return {};
  },

  toJSON(_: InstallResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<InstallResponse>, I>>(base?: I): InstallResponse {
    return InstallResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InstallResponse>, I>>(_: I): InstallResponse {
    const message = createBaseInstallResponse();
    return message;
  },
};

function createBaseInvokeRequest(): InvokeRequest {
  return { functionId: "", method: "", callData: "" };
}

export const InvokeRequest = {
  encode(message: InvokeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.method !== "") {
      writer.uint32(18).string(message.method);
    }
    if (message.callData !== "") {
      writer.uint32(26).string(message.callData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvokeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.method = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.callData = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvokeRequest {
    return {
      functionId: isSet(object.functionId) ? globalThis.String(object.functionId) : "",
      method: isSet(object.method) ? globalThis.String(object.method) : "",
      callData: isSet(object.callData) ? globalThis.String(object.callData) : "",
    };
  },

  toJSON(message: InvokeRequest): unknown {
    const obj: any = {};
    if (message.functionId !== "") {
      obj.functionId = message.functionId;
    }
    if (message.method !== "") {
      obj.method = message.method;
    }
    if (message.callData !== "") {
      obj.callData = message.callData;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvokeRequest>, I>>(base?: I): InvokeRequest {
    return InvokeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvokeRequest>, I>>(object: I): InvokeRequest {
    const message = createBaseInvokeRequest();
    message.functionId = object.functionId ?? "";
    message.method = object.method ?? "";
    message.callData = object.callData ?? "";
    return message;
  },
};

function createBaseInvokeResponse(): InvokeResponse {
  return { code: "", requestId: "", result: "", usage: undefined };
}

export const InvokeResponse = {
  encode(message: InvokeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.requestId !== "") {
      writer.uint32(18).string(message.requestId);
    }
    if (message.result !== "") {
      writer.uint32(26).string(message.result);
    }
    if (message.usage !== undefined) {
      InvokeUsage.encode(message.usage, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvokeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.code = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.result = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.usage = InvokeUsage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvokeResponse {
    return {
      code: isSet(object.code) ? globalThis.String(object.code) : "",
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
      result: isSet(object.result) ? globalThis.String(object.result) : "",
      usage: isSet(object.usage) ? InvokeUsage.fromJSON(object.usage) : undefined,
    };
  },

  toJSON(message: InvokeResponse): unknown {
    const obj: any = {};
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.result !== "") {
      obj.result = message.result;
    }
    if (message.usage !== undefined) {
      obj.usage = InvokeUsage.toJSON(message.usage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvokeResponse>, I>>(base?: I): InvokeResponse {
    return InvokeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvokeResponse>, I>>(object: I): InvokeResponse {
    const message = createBaseInvokeResponse();
    message.code = object.code ?? "";
    message.requestId = object.requestId ?? "";
    message.result = object.result ?? "";
    message.usage = (object.usage !== undefined && object.usage !== null)
      ? InvokeUsage.fromPartial(object.usage)
      : undefined;
    return message;
  },
};

function createBaseInvokeUsage(): InvokeUsage {
  return {};
}

export const InvokeUsage = {
  encode(_: InvokeUsage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeUsage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvokeUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): InvokeUsage {
    return {};
  },

  toJSON(_: InvokeUsage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<InvokeUsage>, I>>(base?: I): InvokeUsage {
    return InvokeUsage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvokeUsage>, I>>(_: I): InvokeUsage {
    const message = createBaseInvokeUsage();
    return message;
  },
};

export interface Gateway {
  Install(request: InstallRequest): Promise<InstallResponse>;
  Invoke(request: InvokeRequest): Promise<InvokeResponse>;
}

export const GatewayServiceName = "gateway.Gateway";
export class GatewayClientImpl implements Gateway {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || GatewayServiceName;
    this.rpc = rpc;
    this.Install = this.Install.bind(this);
    this.Invoke = this.Invoke.bind(this);
  }
  Install(request: InstallRequest): Promise<InstallResponse> {
    const data = InstallRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Install", data);
    return promise.then((data) => InstallResponse.decode(_m0.Reader.create(data)));
  }

  Invoke(request: InvokeRequest): Promise<InvokeResponse> {
    const data = InvokeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Invoke", data);
    return promise.then((data) => InvokeResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
