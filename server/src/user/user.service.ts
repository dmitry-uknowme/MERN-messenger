import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { model, Model, ObjectId } from 'mongoose';
import {
  CreateUserChatPayload,
  CreateUserPayload,
  UpdateUserTypePayload,
} from './user.payload';
import { User, UserDocument } from './user.schema';
import { transliterate as tr } from 'transliteration';
import { Chat, ChatDocument } from 'src/chat/chat.schema';
import { Message, MessageDocument } from 'src/message/message.schema';

@Injectable()
export class UserService {
  private logger: Logger = new Logger('UserService');
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Chat.name) private chatModel: Model<ChatDocument>,
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}
  async create(payload: CreateUserPayload): Promise<User> {
    return await this.userModel.create({
      ...payload,
      isOnline: false,
      isAdmin: false,
      nickname: `${tr(payload.name)}-${tr(payload.surname)}`.toLowerCase(),
      friends: [],
      chats: [],
      audios: [],
      posts: [],
      photos: [],
    });
  }

  async update(nickname: string, type: any, payload: UpdateUserTypePayload) {
    const user = await this.userModel.findOne({ nickname });
    console.log('payloadd', payload);

    if (type === 'friends') {
      //@ts-expect-error
      payload.friends.map((friend) => user.friends.push(friend));
    } else if (type === 'online') {
      user.isOnline = !user.isOnline;
      await user.save();
      return user.isOnline;
    } else if (type === 'admin') {
      user.isAdmin = !user.isAdmin;
      await user.save();
      return user.isAdmin;
    } else if (type === 'audios') {
      //@ts-expect-error
      payload.audios.map((audio) => user.friends.push(audio));
    } else if (type === 'photos') {
      //@ts-expect-error
      payload.audios.map((audio) => user.friends.push(audio));
    }
    await user.save();
    return user;
  }

  async getAll() {
    return await this.userModel.find();
  }
  async getOne(nickname: string): Promise<User> {
    return await this.userModel.findOne({ nickname }).populate([
      { path: 'friends', model: 'User' },
      {
        path: 'chats',
        populate: [
          {
            path: 'members',
            model: 'User',
          },
          {
            path: 'messages',
            model: 'Message',
          },
        ],
      },
    ]);
  }
  async delete(id: ObjectId): Promise<UserDocument> {
    return await this.userModel.findByIdAndDelete(id);
  }

  async addUserChat(nickname: string, members: ObjectId[]) {
    const user = await this.userModel.findOne({ nickname });

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
    const chat = await this.chatModel.findById(id);
    user.chats = user.chats.filter((chat) => chat.toString() !== id.toString());
    chat.members = chat.members.filter(
      (member) => member.toString() !== user._id.toString(),
    );
    await user.save();
    await chat.save();
    return user.chats;
  }
}
