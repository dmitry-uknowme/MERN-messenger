import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateUserPayload } from './user.payload';
import { UserService } from './user.service';

@Controller('/api/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  create(@Body() payload: CreateUserPayload) {
    return this.userService.create(payload);
  }
  @Get()
  getAll() {
    return this.userService.getAll();
  }
  @Get(':nickname')
  getOne(@Param('nickname') nickname: string) {
    return this.userService.getOne(nickname);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.userService.delete(id);
  }
}
