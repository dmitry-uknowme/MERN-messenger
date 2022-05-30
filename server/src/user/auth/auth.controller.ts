import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
  Session,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../user.service';
import { LoginUserPayload, LogoutUserPayload } from './user.payload';

@Controller('/api/users')
export class AuthController {
  constructor(
    // private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/login')
  async login(
    @Res() res: Response,
    @Session() session: any,
    @Body() payload: LoginUserPayload,
  ) {
    session.data = { username: payload.username };
    const user = await this.userService.findOneWhere({
      username: payload.username,
    });
    if (!user) {
      throw new NotFoundException();
    }
    if (user.password === payload.password) {
      return res.send({ session }).status(200).end();
    }
  }
  @Post('/logout')
  async logout(@Res() res: Response, @Session() session: any) {
    session.data = {};
    res.send({ session }).status(200).end();
  }
}
