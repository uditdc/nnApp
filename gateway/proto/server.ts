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
  result: { [key: string]: InvokeResult };
}

export interface InvokeResponse_ResultEntry {
  key: string;
  value: InvokeResult | undefined;
}

export interface InvokeResult {
  code: string;
  result: InvokeRuntimeOutput | undefined;
  requestId: string;
  usage: InvokeUsage | undefined;
}

export interface InvokeRuntimeOutput {
  stdout: string;
  stderr: string;
  exitCode: number;
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
  return { code: "", requestId: "", result: {} };
}

export const InvokeResponse = {
  encode(message: InvokeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.requestId !== "") {
      writer.uint32(18).string(message.requestId);
    }
    Object.entries(message.result).forEach(([key, value]) => {
      InvokeResponse_ResultEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
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

          const entry3 = InvokeResponse_ResultEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.result[entry3.key] = entry3.value;
          }
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
      result: isObject(object.result)
        ? Object.entries(object.result).reduce<{ [key: string]: InvokeResult }>((acc, [key, value]) => {
          acc[key] = InvokeResult.fromJSON(value);
          return acc;
        }, {})
        : {},
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
    if (message.result) {
      const entries = Object.entries(message.result);
      if (entries.length > 0) {
        obj.result = {};
        entries.forEach(([k, v]) => {
          obj.result[k] = InvokeResult.toJSON(v);
        });
      }
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
    message.result = Object.entries(object.result ?? {}).reduce<{ [key: string]: InvokeResult }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = InvokeResult.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseInvokeResponse_ResultEntry(): InvokeResponse_ResultEntry {
  return { key: "", value: undefined };
}

export const InvokeResponse_ResultEntry = {
  encode(message: InvokeResponse_ResultEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      InvokeResult.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeResponse_ResultEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvokeResponse_ResultEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = InvokeResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvokeResponse_ResultEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? InvokeResult.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: InvokeResponse_ResultEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = InvokeResult.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvokeResponse_ResultEntry>, I>>(base?: I): InvokeResponse_ResultEntry {
    return InvokeResponse_ResultEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvokeResponse_ResultEntry>, I>>(object: I): InvokeResponse_ResultEntry {
    const message = createBaseInvokeResponse_ResultEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? InvokeResult.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseInvokeResult(): InvokeResult {
  return { code: "", result: undefined, requestId: "", usage: undefined };
}

export const InvokeResult = {
  encode(message: InvokeResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.result !== undefined) {
      InvokeRuntimeOutput.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    if (message.requestId !== "") {
      writer.uint32(26).string(message.requestId);
    }
    if (message.usage !== undefined) {
      InvokeUsage.encode(message.usage, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvokeResult();
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

          message.result = InvokeRuntimeOutput.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requestId = reader.string();
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

  fromJSON(object: any): InvokeResult {
    return {
      code: isSet(object.code) ? globalThis.String(object.code) : "",
      result: isSet(object.result) ? InvokeRuntimeOutput.fromJSON(object.result) : undefined,
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
      usage: isSet(object.usage) ? InvokeUsage.fromJSON(object.usage) : undefined,
    };
  },

  toJSON(message: InvokeResult): unknown {
    const obj: any = {};
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.result !== undefined) {
      obj.result = InvokeRuntimeOutput.toJSON(message.result);
    }
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.usage !== undefined) {
      obj.usage = InvokeUsage.toJSON(message.usage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvokeResult>, I>>(base?: I): InvokeResult {
    return InvokeResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvokeResult>, I>>(object: I): InvokeResult {
    const message = createBaseInvokeResult();
    message.code = object.code ?? "";
    message.result = (object.result !== undefined && object.result !== null)
      ? InvokeRuntimeOutput.fromPartial(object.result)
      : undefined;
    message.requestId = object.requestId ?? "";
    message.usage = (object.usage !== undefined && object.usage !== null)
      ? InvokeUsage.fromPartial(object.usage)
      : undefined;
    return message;
  },
};

function createBaseInvokeRuntimeOutput(): InvokeRuntimeOutput {
  return { stdout: "", stderr: "", exitCode: 0 };
}

export const InvokeRuntimeOutput = {
  encode(message: InvokeRuntimeOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stdout !== "") {
      writer.uint32(10).string(message.stdout);
    }
    if (message.stderr !== "") {
      writer.uint32(18).string(message.stderr);
    }
    if (message.exitCode !== 0) {
      writer.uint32(24).int32(message.exitCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeRuntimeOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvokeRuntimeOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stdout = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stderr = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.exitCode = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvokeRuntimeOutput {
    return {
      stdout: isSet(object.stdout) ? globalThis.String(object.stdout) : "",
      stderr: isSet(object.stderr) ? globalThis.String(object.stderr) : "",
      exitCode: isSet(object.exitCode) ? globalThis.Number(object.exitCode) : 0,
    };
  },

  toJSON(message: InvokeRuntimeOutput): unknown {
    const obj: any = {};
    if (message.stdout !== "") {
      obj.stdout = message.stdout;
    }
    if (message.stderr !== "") {
      obj.stderr = message.stderr;
    }
    if (message.exitCode !== 0) {
      obj.exitCode = Math.round(message.exitCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvokeRuntimeOutput>, I>>(base?: I): InvokeRuntimeOutput {
    return InvokeRuntimeOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvokeRuntimeOutput>, I>>(object: I): InvokeRuntimeOutput {
    const message = createBaseInvokeRuntimeOutput();
    message.stdout = object.stdout ?? "";
    message.stderr = object.stderr ?? "";
    message.exitCode = object.exitCode ?? 0;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
