import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';
import {
  CreateUserChatPayload,
  CreateUserPayload,
  UpdateUserTypePayload,
} from './user.payload';
import { UserService } from './user.service';

@Controller('/api/users')
export class UserController {
  constructor(private userService: UserService) {}
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  @Post()
  create(@UploadedFiles() files, @Body() payload: CreateUserPayload) {
    return this.userService.create(payload, files);
  }
  @Get()
  getAll() {
    return this.userService.getAll();
  }
  @Get(':nickname')
  getOne(@Param('nickname') nickname: string) {
    return this.userService.getOne(nickname);
  }
  @Put(':nickname/:type')
  update(
    @Param('nickname') nickname: string,
    @Param('type') type: string,
    @Body() payload: UpdateUserTypePayload,
  ) {
    return this.userService.update(nickname, type, payload);
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
    @Body() members?: ObjectId[],
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

@Controller('/api/users/:nickname/photos')
export class UserPhotoController {
  constructor(private userService: UserService) {}
  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  addUserPhoto(@UploadedFiles() files, @Param('nickname') nickname: string) {
    this.userService.addUserPhoto(nickname, files);
  }
}
