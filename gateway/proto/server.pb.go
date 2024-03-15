// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.12.4
// source: gateway/proto/server.proto

package gateway

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type InstallRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Cid string `protobuf:"bytes,1,opt,name=cid,proto3" json:"cid,omitempty"`
	Uri string `protobuf:"bytes,2,opt,name=uri,proto3" json:"uri,omitempty"`
}

func (x *InstallRequest) Reset() {
	*x = InstallRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_gateway_proto_server_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InstallRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InstallRequest) ProtoMessage() {}

func (x *InstallRequest) ProtoReflect() protoreflect.Message {
	mi := &file_gateway_proto_server_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InstallRequest.ProtoReflect.Descriptor instead.
func (*InstallRequest) Descriptor() ([]byte, []int) {
	return file_gateway_proto_server_proto_rawDescGZIP(), []int{0}
}

func (x *InstallRequest) GetCid() string {
	if x != nil {
		return x.Cid
	}
	return ""
}

func (x *InstallRequest) GetUri() string {
	if x != nil {
		return x.Uri
	}
	return ""
}

type InstallResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *InstallResponse) Reset() {
	*x = InstallResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_gateway_proto_server_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InstallResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InstallResponse) ProtoMessage() {}

func (x *InstallResponse) ProtoReflect() protoreflect.Message {
	mi := &file_gateway_proto_server_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InstallResponse.ProtoReflect.Descriptor instead.
func (*InstallResponse) Descriptor() ([]byte, []int) {
	return file_gateway_proto_server_proto_rawDescGZIP(), []int{1}
}

type InvokeRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FunctionId string `protobuf:"bytes,1,opt,name=functionId,proto3" json:"functionId,omitempty"`
	Method     string `protobuf:"bytes,2,opt,name=method,proto3" json:"method,omitempty"`
	CallData   string `protobuf:"bytes,3,opt,name=callData,proto3" json:"callData,omitempty"`
}

func (x *InvokeRequest) Reset() {
	*x = InvokeRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_gateway_proto_server_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InvokeRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InvokeRequest) ProtoMessage() {}

func (x *InvokeRequest) ProtoReflect() protoreflect.Message {
	mi := &file_gateway_proto_server_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InvokeRequest.ProtoReflect.Descriptor instead.
func (*InvokeRequest) Descriptor() ([]byte, []int) {
	return file_gateway_proto_server_proto_rawDescGZIP(), []int{2}
}

func (x *InvokeRequest) GetFunctionId() string {
	if x != nil {
		return x.FunctionId
	}
	return ""
}

func (x *InvokeRequest) GetMethod() string {
	if x != nil {
		return x.Method
	}
	return ""
}

func (x *InvokeRequest) GetCallData() string {
	if x != nil {
		return x.CallData
	}
	return ""
}

type InvokeResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *InvokeResponse) Reset() {
	*x = InvokeResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_gateway_proto_server_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InvokeResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InvokeResponse) ProtoMessage() {}

func (x *InvokeResponse) ProtoReflect() protoreflect.Message {
	mi := &file_gateway_proto_server_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InvokeResponse.ProtoReflect.Descriptor instead.
func (*InvokeResponse) Descriptor() ([]byte, []int) {
	return file_gateway_proto_server_proto_rawDescGZIP(), []int{3}
}

func (x *InvokeResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

var File_gateway_proto_server_proto protoreflect.FileDescriptor

var file_gateway_proto_server_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f,
	0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x67, 0x61,
	0x74, 0x65, 0x77, 0x61, 0x79, 0x22, 0x34, 0x0a, 0x0e, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6c, 0x6c,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x63, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x63, 0x69, 0x64, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x72, 0x69,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x72, 0x69, 0x22, 0x11, 0x0a, 0x0f, 0x49,
	0x6e, 0x73, 0x74, 0x61, 0x6c, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x63,
	0x0a, 0x0d, 0x49, 0x6e, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x1e, 0x0a, 0x0a, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0a, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12,
	0x16, 0x0a, 0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x61, 0x6c, 0x6c, 0x44,
	0x61, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x61, 0x6c, 0x6c, 0x44,
	0x61, 0x74, 0x61, 0x22, 0x2a, 0x0a, 0x0e, 0x49, 0x6e, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x32,
	0x86, 0x01, 0x0a, 0x07, 0x47, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x12, 0x3e, 0x0a, 0x07, 0x49,
	0x6e, 0x73, 0x74, 0x61, 0x6c, 0x6c, 0x12, 0x17, 0x2e, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79,
	0x2e, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6c, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x18, 0x2e, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2e, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6c,
	0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x3b, 0x0a, 0x06, 0x49,
	0x6e, 0x76, 0x6f, 0x6b, 0x65, 0x12, 0x16, 0x2e, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2e,
	0x49, 0x6e, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e,
	0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2e, 0x49, 0x6e, 0x76, 0x6f, 0x6b, 0x65, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x21, 0x5a, 0x1f, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x64, 0x69, 0x74, 0x64, 0x63, 0x2f, 0x6e, 0x6e,
	0x41, 0x70, 0x70, 0x2f, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_gateway_proto_server_proto_rawDescOnce sync.Once
	file_gateway_proto_server_proto_rawDescData = file_gateway_proto_server_proto_rawDesc
)

func file_gateway_proto_server_proto_rawDescGZIP() []byte {
	file_gateway_proto_server_proto_rawDescOnce.Do(func() {
		file_gateway_proto_server_proto_rawDescData = protoimpl.X.CompressGZIP(file_gateway_proto_server_proto_rawDescData)
	})
	return file_gateway_proto_server_proto_rawDescData
}

var file_gateway_proto_server_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_gateway_proto_server_proto_goTypes = []interface{}{
	(*InstallRequest)(nil),  // 0: gateway.InstallRequest
	(*InstallResponse)(nil), // 1: gateway.InstallResponse
	(*InvokeRequest)(nil),   // 2: gateway.InvokeRequest
	(*InvokeResponse)(nil),  // 3: gateway.InvokeResponse
}
var file_gateway_proto_server_proto_depIdxs = []int32{
	0, // 0: gateway.Gateway.Install:input_type -> gateway.InstallRequest
	2, // 1: gateway.Gateway.Invoke:input_type -> gateway.InvokeRequest
	1, // 2: gateway.Gateway.Install:output_type -> gateway.InstallResponse
	3, // 3: gateway.Gateway.Invoke:output_type -> gateway.InvokeResponse
	2, // [2:4] is the sub-list for method output_type
	0, // [0:2] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_gateway_proto_server_proto_init() }
func file_gateway_proto_server_proto_init() {
	if File_gateway_proto_server_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_gateway_proto_server_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InstallRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_gateway_proto_server_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InstallResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_gateway_proto_server_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InvokeRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_gateway_proto_server_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InvokeResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_gateway_proto_server_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_gateway_proto_server_proto_goTypes,
		DependencyIndexes: file_gateway_proto_server_proto_depIdxs,
		MessageInfos:      file_gateway_proto_server_proto_msgTypes,
	}.Build()
	File_gateway_proto_server_proto = out.File
	file_gateway_proto_server_proto_rawDesc = nil
	file_gateway_proto_server_proto_goTypes = nil
	file_gateway_proto_server_proto_depIdxs = nil
}
