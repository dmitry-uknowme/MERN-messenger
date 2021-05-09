import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { model, Model, ObjectId } from 'mongoose';
import { CreateUserChatPayload, CreateUserPayload } from './user.payload';
import { User, UserDocument } from './user.schema';
import { transliterate as tr } from 'transliteration';
import { Chat, ChatDocument } from 'src/chat/chat.schema';

@Injectable()
export class UserService {
  private logger: Logger = new Logger('UserService');
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Chat.name) private chatModel: Model<ChatDocument>,
  ) {}
  async create(payload: CreateUserPayload): Promise<User> {
    return await this.userModel.create({
      ...payload,
      isOnline: false,
      isAdmin: false,
      nickname: `${tr(payload.name)}-${tr(payload.surname)}`.toLowerCase(),
      friends: [],
      chats: [],
    });
  }
  async getAll() {
    return await this.userModel.find();
  }
  async getOne(nickname: string): Promise<User> {
    return await this.userModel.findOne({ nickname }).populate('chats');
  }
  async delete(id: ObjectId): Promise<UserDocument> {
    return await this.userModel.findByIdAndDelete(id);
  }

  async addUserChat(nickname: string, members: ObjectId[]) {
    const user = await this.userModel.findOne({ nickname });
    //@ts-expect-error
    this.logger.log(members.members);

    let chatMembers = [user._id];

    //@ts-expect-error
    members?.members?.map((member) => chatMembers.push(member));

    const chat = await this.chatModel.create({
      members: chatMembers,
      messages: [],
    });
    user.chats.push(chat._id);
    await user.save();
    return chat;
  }

  async getUserChats(nickname: string) {
    const user = await this.userModel.findOne({ nickname }).populate({
      path: 'chats',
      populate: {
        path: 'members',
        model: 'User',
      },
    });
    return user.chats;
  }
  async getUserChat(nickname: string, id: ObjectId) {
    const user = await this.userModel.findOne({ nickname });
    return await this.chatModel
      .findOne({ members: user._id, _id: id })
      .populate('members');
  }

  async deleteUserChat(nickname: string, id: ObjectId) {
    const user = await this.userModel.findOne({ nickname });
    user.chats = user.chats.filter((chat) => chat.toString() !== id.toString());
    await user.save();
    return user.chats;
  }
}
