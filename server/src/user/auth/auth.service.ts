import { Injectable, Logger } from '@nestjs/common';
import { LoginUserPayload, LogoutUserPayload } from './user.payload';

@Injectable()
export class AuthService {
  private logger: Logger = new Logger('UserService');
  //   constructor() {}

  async login(payload: LoginUserPayload) {}

  async logout(payload: LogoutUserPayload) {}
}
