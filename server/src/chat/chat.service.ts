import { Injectable, Logger } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { ChangeChatTypePayload, CreateChatPayload } from './chat.payload';
import { ChatEntity } from './chat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {
  private logger: Logger = new Logger('ChatService');
  constructor(
    @InjectRepository(ChatEntity)
    private chatRepository: Repository<ChatEntity>,
  ) {}
  async create(payload: CreateChatPayload): Promise<ChatEntity> {
    return await this.chatRepository.create({
      type: payload.type,
      messages: [],
      members: [],
    });
  }
  async getAll(): Promise<ChatEntity[]> {
    return await this.chatRepository.find();
  }

  async getOne(id: string): Promise<ChatEntity> {
    return await this.chatRepository.findOneBy({ id });
    // async getOneOfUser(
    //   nickname: string,
    //   chatId: string,
    // ): Promise<ChatDocument[]> {
    //   return await this.chatModel.find({ members: [nickname] });
    // }
  }

  //   async getOne(id: ObjectId): Promise<Chat> {
  //     return await this.chatModel.findById(id);
  //   }

  //   async changeType(id: ObjectId, payload: ChangeChatTypePayload) {
  //     return await this.chatModel.findByIdAndDelete(id, {
  //       //@ts-expect-error
  //       type: payload.type,
  //     });
  //   }
  //   async deleteAll(): Promise<Chat> {
  //     return await this.chatModel.findByIdAndDelete();
  //   }
  //   async deleteOne(id: ObjectId): Promise<Chat> {
  //     return await this.chatModel.findByIdAndDelete(id);
  //   }
}
