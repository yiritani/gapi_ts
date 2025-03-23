// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_user_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type user.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserResponse(arg) {
  if (!(arg instanceof user_pb.GetUserResponse)) {
    throw new Error('Expected argument of type user.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserResponse(buffer_arg) {
  return user_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ListUsersRequest(arg) {
  if (!(arg instanceof user_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type user.ListUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ListUsersRequest(buffer_arg) {
  return user_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ListUsersResponse(arg) {
  if (!(arg instanceof user_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type user.ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ListUsersResponse(buffer_arg) {
  return user_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/user.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.GetUserResponse,
    requestSerialize: serialize_user_GetUserRequest,
    requestDeserialize: deserialize_user_GetUserRequest,
    responseSerialize: serialize_user_GetUserResponse,
    responseDeserialize: deserialize_user_GetUserResponse,
  },
  listUsers: {
    path: '/user.UserService/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ListUsersRequest,
    responseType: user_pb.ListUsersResponse,
    requestSerialize: serialize_user_ListUsersRequest,
    requestDeserialize: deserialize_user_ListUsersRequest,
    responseSerialize: serialize_user_ListUsersResponse,
    responseDeserialize: deserialize_user_ListUsersResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService, 'UserService');
