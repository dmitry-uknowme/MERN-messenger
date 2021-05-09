import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ChangeChatTypePayload, CreateChatPayload } from './chat.payload';
import { ChatService } from './chat.service';

@Controller('/api/users/:nickname/chats')
export class ChatController {
  constructor(private chatService: ChatService) {}
  // @Post()
  // create(@Body() payload: CreateChatPayload) {
  //   return this.chatService.create(payload);
  // }

  // @Get()
  // getAllOfUser(@Param('nickname') nickname: string) {
  //   return this.chatService.getAllOfUser(nickname);
  // }

  // @Get(':chatId')
  // getOneOfUser(
  //   @Param('nickname') nickname: string,
  //   @Param('chatId') chatId: string,
  // ) {
  //   return this.chatService.getOneOfUser(nickname, chatId);
  // }

  // @Get(':nickname')
  // getOne(@Param('nickname') nickname: string) {
  //   return;
  // }

  // @Get(':id')
  // getOne(@Param('id') id: ObjectId) {
  //   return this.chatService.getOne(id);
  // }

  // @Put(':id')
  // changeType(
  //   @Param('id') id: ObjectId,
  //   @Body() payload: ChangeChatTypePayload,
  // ) {
  //   return this.chatService.changeType(id, payload);
  // }

  // @Delete()
  // deleteAll() {
  //   return this.chatService.deleteAll();
  // }
  // @Delete(':id')
  // deleteOne(@Param('id') id: ObjectId) {
  //   return this.chatService.deleteOne(id);
  // }
}
