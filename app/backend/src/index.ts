import express from 'express';
import { Server, ServerCredentials } from '@grpc/grpc-js';
import { UserServiceService } from './_generate/user_grpc_pb';
import { UserService } from './user_service';
import { ListUsersRequest } from './_generate/user_pb';
import bodyParser from 'body-parser';
const app = express();
const userService = new UserService();
import { RegisterRoutes } from "./.build/routes";

app.use(
  bodyParser.json()
)

// gRPC server setup
const server = new Server();
server.addService(UserServiceService, userService);
server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error('Failed to bind server:', err);
    return;
  }
  console.log(`gRPC server running on port ${port}`);
});

// REST endpoints
app.get('/v1/users', (req, res) => {
  const request = new ListUsersRequest();
  userService.listUsers(
    { request } as any,
    (err, response) => {
      if (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (response) {
        res.json(response.toObject());
      } else {
        res.status(500).json({ error: 'No response received' });
      }
    }
  );
});

app.listen(3000, () => {
  console.log('REST server running on port 3000');
});

RegisterRoutes(app);
