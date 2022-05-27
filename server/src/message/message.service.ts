import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateMessagePayload } from './message.payload';
import { MessageEntity } from './message.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatEntity } from 'src/chat/chat.entity';

@Injectable()
export class MessageService {
  private logger: Logger = new Logger('MsgService');
  constructor(
    @InjectRepository(MessageEntity)
    private messageRepository: Repository<MessageEntity>,
    @InjectRepository(ChatEntity)
    private chatRepository: Repository<ChatEntity>,
  ) {}
  // async addChatMessage(id: ObjectId, payload: CreateMessagePayload) {
  //   this.logger.log(JSON.stringify(payload));
  //   const chat = await this.chatRepository.findById(id).populate('messages');
  //   const message = await this.messageRepository.create({
  //     ...payload,
  //     // date: Date.now().toString(),
  //   });
  //   chat.messages.push(message._id);
  //   await chat.save();
  //   return message;
  // }
  // async getChatMessages(id: ObjectId) {
  //   const chat = await this.chatModel.findById(id).populate('messages');
  //   return chat;
  // }
  // async getOne() {}
  // async delete() {}
}
