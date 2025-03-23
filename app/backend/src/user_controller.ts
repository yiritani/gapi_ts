import {
  Controller,
  Get,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import { UserService } from './user_service';
import { ListUsersRequest, ListUsersResponse } from './_generate/user_pb';

@Route("/v1/users")
@Tags("User")
export class UserController extends Controller {
  private userService: UserService;

  constructor() {
    super();
    this.userService = new UserService();
  }

  @Get("/")
  @SuccessResponse(200, "OK")
  public async getUsers(): Promise<any> {
    const request = new ListUsersRequest();
    return new Promise((resolve, reject) => {
      this.userService.listUsers(
        { request } as any,
        (err, response) => {
          if (err) {
            reject(err);
          } else if (response) {
            resolve(response.toObject());
          } else {
            reject(new Error('No response received'));
          }
        }
      );
    });
  }
}
