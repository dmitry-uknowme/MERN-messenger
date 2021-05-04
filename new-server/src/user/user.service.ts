import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserPayload } from './user.payload';
import { User, UserDocument } from './user.schema';
import { transliterate as tr } from 'transliteration';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(payload: CreateUserPayload): Promise<User> {
    return await this.userModel.create({
      ...payload,
      nickname: `${tr(payload.name)}-${tr(payload.surname)}`.toLowerCase(),
      friends: [],
      chats: [],
    });
  }
  async getAll() {
    return await this.userModel.find();
  }
  async getOne(id: ObjectId): Promise<User> {
    return await this.userModel.findById(id);
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const user = await this.userModel.findByIdAndDelete(id);
    return user._id;
  }
}
