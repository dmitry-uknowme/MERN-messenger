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

@Controller('/api/chats')
export class ChatController {
  constructor(private chatService: ChatService) {}
  @Post()
  create(@Body() payload: CreateChatPayload) {
    return this.chatService.create(payload);
  }

  @Get()
  getAll() {
    return this.chatService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.chatService.getOne(id);
  }

  @Put(':id')
  changeType(
    @Param('id') id: ObjectId,
    @Body() payload: ChangeChatTypePayload,
  ) {
    return this.chatService.changeType(id, payload);
  }

  @Delete()
  deleteAll() {
    return this.chatService.deleteAll();
  }
  @Delete(':id')
  deleteOne(@Param('id') id: ObjectId) {
    return this.chatService.deleteOne(id);
  }
}
