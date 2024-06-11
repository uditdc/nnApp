/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "gateway";

export interface InvokeRequest {
  functionId: string;
  method: string;
  callData: string;
}

export interface InvokeResponse {
  code: string;
  requestId: string;
  result: ResultMap | undefined;
  usage: InvokeUsage | undefined;
}

export interface InvokeUsage {
}

export interface ResultMap {
  data: { [key: string]: Result };
}

export interface ResultMap_DataEntry {
  key: string;
  value: Result | undefined;
}

export interface Result {
  stdout: string;
  stderr: string;
  exitCode: number;
}

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
  return { code: "", requestId: "", result: undefined, usage: undefined };
}

export const InvokeResponse = {
  encode(message: InvokeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.requestId !== "") {
      writer.uint32(18).string(message.requestId);
    }
    if (message.result !== undefined) {
      ResultMap.encode(message.result, writer.uint32(26).fork()).ldelim();
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

          message.result = ResultMap.decode(reader, reader.uint32());
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
      result: isSet(object.result) ? ResultMap.fromJSON(object.result) : undefined,
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
    if (message.result !== undefined) {
      obj.result = ResultMap.toJSON(message.result);
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
    message.result = (object.result !== undefined && object.result !== null)
      ? ResultMap.fromPartial(object.result)
      : undefined;
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

function createBaseResultMap(): ResultMap {
  return { data: {} };
}

export const ResultMap = {
  encode(message: ResultMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.data).forEach(([key, value]) => {
      ResultMap_DataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResultMap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResultMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = ResultMap_DataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.data[entry1.key] = entry1.value;
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

  fromJSON(object: any): ResultMap {
    return {
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: Result }>((acc, [key, value]) => {
          acc[key] = Result.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ResultMap): unknown {
    const obj: any = {};
    if (message.data) {
      const entries = Object.entries(message.data);
      if (entries.length > 0) {
        obj.data = {};
        entries.forEach(([k, v]) => {
          obj.data[k] = Result.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResultMap>, I>>(base?: I): ResultMap {
    return ResultMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResultMap>, I>>(object: I): ResultMap {
    const message = createBaseResultMap();
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: Result }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Result.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseResultMap_DataEntry(): ResultMap_DataEntry {
  return { key: "", value: undefined };
}

export const ResultMap_DataEntry = {
  encode(message: ResultMap_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Result.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResultMap_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResultMap_DataEntry();
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

          message.value = Result.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResultMap_DataEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Result.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ResultMap_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Result.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResultMap_DataEntry>, I>>(base?: I): ResultMap_DataEntry {
    return ResultMap_DataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResultMap_DataEntry>, I>>(object: I): ResultMap_DataEntry {
    const message = createBaseResultMap_DataEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Result.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseResult(): Result {
  return { stdout: "", stderr: "", exitCode: 0 };
}

export const Result = {
  encode(message: Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Result {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
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

  fromJSON(object: any): Result {
    return {
      stdout: isSet(object.stdout) ? globalThis.String(object.stdout) : "",
      stderr: isSet(object.stderr) ? globalThis.String(object.stderr) : "",
      exitCode: isSet(object.exitCode) ? globalThis.Number(object.exitCode) : 0,
    };
  },

  toJSON(message: Result): unknown {
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

  create<I extends Exact<DeepPartial<Result>, I>>(base?: I): Result {
    return Result.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Result>, I>>(object: I): Result {
    const message = createBaseResult();
    message.stdout = object.stdout ?? "";
    message.stderr = object.stderr ?? "";
    message.exitCode = object.exitCode ?? 0;
    return message;
  },
};

export interface Gateway {
  Invoke(request: DeepPartial<InvokeRequest>, metadata?: grpc.Metadata): Promise<InvokeResponse>;
}

export class GatewayClientImpl implements Gateway {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Invoke = this.Invoke.bind(this);
  }

  Invoke(request: DeepPartial<InvokeRequest>, metadata?: grpc.Metadata): Promise<InvokeResponse> {
    return this.rpc.unary(GatewayInvokeDesc, InvokeRequest.fromPartial(request), metadata);
  }
}

export const GatewayDesc = { serviceName: "gateway.Gateway" };

export const GatewayInvokeDesc: UnaryMethodDefinitionish = {
  methodName: "Invoke",
  service: GatewayDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvokeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = InvokeResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
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

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
