import { ListUsersRequest, ListUsersResponse, User, GetUserRequest, GetUserResponse } from './_generate/backend/user_pb';
import { IUserServiceServer } from './_generate/backend/user_grpc_pb';
import * as grpc from '@grpc/grpc-js';

export class UserService implements IUserServiceServer {
  [key: string]: any; // Add index signature

  async getUser(
    call: grpc.ServerUnaryCall<GetUserRequest, GetUserResponse>,
    callback: grpc.sendUnaryData<GetUserResponse>
  ): Promise<void> {
    const response = new GetUserResponse();
    const user = new User();
    user.setId(call.request.getId());
    user.setName('John Doe'); // 仮のデータ
    response.setUser(user);
    callback(null, response);
  }

  async listUsers(
    call: grpc.ServerUnaryCall<ListUsersRequest, ListUsersResponse>,
    callback: grpc.sendUnaryData<ListUsersResponse>
  ): Promise<void> {
    const response = new ListUsersResponse();
    
    // 仮のデータを返す
    const users = [
      { id: '1', name: 'John ' },
      { id: '2', name: 'Jane Smith' }
    ];

    users.forEach(userData => {
      const user = new User();
      user.setId(userData.id);
      user.setName(userData.name);
      response.addUsers(user);
    });

    callback(null, response);
  }
}
