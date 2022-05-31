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
import { LoginUserPayload } from './user.payload';

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
    const user = await this.userService.findOne({
      username: payload.username,
    });

    if (!user) {
      throw new NotFoundException(
        {
          message: 'Not Found',
          translate: 'Пользователь с такими данными не найден',
        },
        'User is not found',
      );
    }
    session.data = { user_id: user.id, username: payload.username };
    if (user.password === payload.password) {
      return res.send({ user }).status(201).end();
    }

    throw new NotFoundException(
      {
        message: 'Not Found',
        translate: 'Пользователь с такими данными не найден',
      },
      'User is not found',
    );
  }
  @Post('/logout')
  async logout(@Res() res: Response, @Session() session: any) {
    session.data = {};
    res.send({ session }).status(200).end();
  }
}
