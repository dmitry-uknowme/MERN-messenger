import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateUserChatPayload, CreateUserPayload } from './user.payload';
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
@Controller('/api/users/:nickname/chats')
export class UserChatController {
  constructor(private userService: UserService) {}
  @Post()
  addUserChat(
    @Param('nickname') nickname: string,
    @Body() members: ObjectId[],
  ) {
    return this.userService.addUserChat(nickname, members);
  }
  @Get()
  getUserChats(@Param('nickname') nickname: string) {
    return this.userService.getUserChats(nickname);
  }

  @Get(':id')
  getUserChat(@Param('nickname') nickname: string, @Param('id') id: ObjectId) {
    return this.userService.getUserChat(nickname, id);
  }

  @Delete(':id')
  deleteUserChat(
    @Param('nickname') nickname: string,
    @Param('id') id: ObjectId,
  ) {
    return this.userService.deleteUserChat(nickname, id);
  }
}
