// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserServiceService_IGetUser;
    listUsers: IUserServiceService_IListUsers;
}

interface IUserServiceService_IGetUser extends grpc.MethodDefinition<user_pb.GetUserRequest, user_pb.GetUserResponse> {
    path: "/user.UserService/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_pb.GetUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetUserResponse>;
}
interface IUserServiceService_IListUsers extends grpc.MethodDefinition<user_pb.ListUsersRequest, user_pb.ListUsersResponse> {
    path: "/user.UserService/ListUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ListUsersRequest>;
    requestDeserialize: grpc.deserialize<user_pb.ListUsersRequest>;
    responseSerialize: grpc.serialize<user_pb.ListUsersResponse>;
    responseDeserialize: grpc.deserialize<user_pb.ListUsersResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    getUser: grpc.handleUnaryCall<user_pb.GetUserRequest, user_pb.GetUserResponse>;
    listUsers: grpc.handleUnaryCall<user_pb.ListUsersRequest, user_pb.ListUsersResponse>;
}

export interface IUserServiceClient {
    getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
}
