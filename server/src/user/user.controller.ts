import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { SessionGuard } from 'src/guards/session.guard';
import { FindManyOptions, FindOptionsWhere } from 'typeorm';
import { UserEntity } from './user.entity';
import {
  CreateUserChatPayload,
  CreateUserPayload,
  UpdateUserTypePayload,
} from './user.payload';
import { UserService } from './user.service';

@Controller('/api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  create(@Body() payload: CreateUserPayload) {
    return this.userService.create(payload);
  }

  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() payload: FindOptionsWhere<UserEntity>,
  ) {
    return this.userService.update(id, payload);
  }

  @Get()
  @UseGuards(SessionGuard)
  findAll(
    @Query()
    query: FindOptionsWhere<UserEntity> | FindOptionsWhere<UserEntity>[],
  ): Promise<UserEntity[]> {
    return this.userService.findAll(query);
  }

  @Get('/:id')
  @UseGuards(SessionGuard)
  findOneById(@Param('id') id: string, @Query() query) {
    if (query.column === 'username') {
      return this.userService.findOne({ username: id });
    } else if (!query.column) {
      return this.userService.findOne({ id });
    }
  }
}
// @Controller('/api/users/:nickname/chats')
// export class UserChatController {
//   constructor(private userService: UserService) {}
//   @Post()
//   addUserChat(
//     @Param('nickname') nickname: string,
//     @Body() members?: ObjectId[],
//   ) {
//     return this.userService.addUserChat(nickname, members);
//   }
//   @Get()
//   getUserChats(@Param('nickname') nickname: string) {
//     return this.userService.getUserChats(nickname);
//   }

//   @Get(':id')
//   getUserChat(@Param('nickname') nickname: string, @Param('id') id: ObjectId) {
//     return this.userService.getUserChat(nickname, id);
//   }

//   @Delete(':id')
//   deleteUserChat(
//     @Param('nickname') nickname: string,
//     @Param('id') id: ObjectId,
//   ) {
//     return this.userService.deleteUserChat(nickname, id);
//   }
// }

// @Controller('/api/users/:nickname/photos')
// export class UserPhotoController {
//   constructor(private userService: UserService) {}
//   @Post()
//   @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
//   addUserPhoto(@UploadedFiles() files, @Param('nickname') nickname: string) {
//     this.userService.addUserPhoto(nickname, files);
//   }
// }
