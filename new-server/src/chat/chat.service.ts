import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User, UserDocument } from 'src/user/user.schema';

import { ChangeChatTypePayload, CreateChatPayload } from './chat.payload';
import { Chat, ChatDocument } from './chat.schema';

@Injectable()
export class ChatService {
  private logger: Logger = new Logger('ChatService');
  constructor(@InjectModel(Chat.name) private chatModel: Model<ChatDocument>) {}
  async create(payload: CreateChatPayload): Promise<Chat> {
    return await this.chatModel.create({
      type: payload.type,
      messages: [],
      members: [],
    });
  }
  async getAll(): Promise<ChatDocument[]> {
    return await this.chatModel.find();
  }

  async getOne(id: ObjectId): Promise<ChatDocument> {
    return await this.chatModel.findById(id).populate([
      {
        path: 'members',
        model: 'User',
      },
      { path: 'messages', model: 'Message' },
    ]);
  }
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
// }
