import { Injectable, Logger } from '@nestjs/common';
import {
  CreateUserChatPayload,
  CreateUserPayload,
  UpdateUserTypePayload,
} from './user.payload';
import { transliterate as tr } from 'transliteration';
import { FileService, FileType } from 'src/file/file.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { ChatEntity } from 'src/chat/chat.entity';

@Injectable()
export class UserService {
  private logger: Logger = new Logger('UserService');
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>, // @InjectRepository(ChatEntity) //private chatRepository: Repository<ChatEntity>, // private fileService: FileService,
  ) {}

  async create(payload: CreateUserPayload): Promise<UserEntity> {
    return await this.userRepository.create({ ...payload });
  }
  // async create(payload: CreateUserPayload, files): Promise<UserEntity> {
  //   console.log('payload', payload);
  //   const user = await this.userRepository.create({
  //     ...payload,
  //     // isOnline: false,
  //     // isAdmin: false,
  //     // username: `${tr(payload.name)}-${tr(payload.surname)}`.toLowerCase(),
  //     first_name: 'da',
  //     middle_name:'da',
  //     last_name:'da',
  //     friends: [],
  //     chats: [],
  //     audios: [],
  //     posts: [],
  //     photos: [],
  //   });

  //   if (files.image) {
  //     const { image } = files;
  //     const imagePath = await this.fileService.create(FileType.IMAGE, image);
  //     user.photos.push(imagePath);
  //   }
  //   // if (payload.image) {
  //   //   user.photos.push(payload.image);
  //   // }
  //   // if (payload.password) {
  //   //   user.password = payload.password;
  //   // }
  //   // if (payload.friends) {
  //   //   //@ts-expect-error
  //   //   console.log('parsed', JSON.parse(payload.friends));
  //   //   //@ts-expect-error
  //   //   JSON.parse(payload.friends).map((friend) => user.friends.push(friend));
  //   // }

  //   if (payload.nickname) {
  //     user.username = payload.nickname;
  //   }

  //   await user.save();
  //   return user;
  // }

  async update(nickname: string, type: any, payload: UpdateUserTypePayload) {
    const user = await this.userRepository.findOneBy({ username: nickname });
    console.log('payloadd', payload);

    // if (type === 'friends') {
    //   payload.friends.map((friend) => user.friends.push(friend));
    // } else if (type === 'online') {
    //   user.isOnline = !user.isOnline;
    //   await user.save();
    //   return user.isOnline;
    // } else if (type === 'admin') {
    //   user.isAdmin = !user.isAdmin;
    //   await user.save();
    //   return user.isAdmin;
    // } else if (type === 'audios') {
    //   payload.audios.map((audio) => user.friends.push(audio));
    // } else if (type === 'photos') {
    //   payload.audios.map((audio) => user.friends.push(audio));
    // }
    await user.save();
    return user;
  }

  async getAll() {
    return await this.userRepository.find();
  }
  // async getOne(nickname: string): Promise<UserEntity> {
  //   // return await this.userRepository.findOne({ nickname }).populate([
  //   //   { path: 'friends', model: 'User' },
  //   //   { path: 'audios', model: 'Audio' },
  //   //   { path: 'posts', model: 'Post' },
  //   //   {
  //   //     path: 'chats',
  //   //     populate: [
  //   //       {
  //   //         path: 'members',
  //   //         model: 'User',
  //   //       },
  //   //       {
  //   //         path: 'messages',
  //   //         model: 'Message',
  //   //       },
  //   //     ],
  //   //   },
  //   // ]);
  // }
  // async delete(id: string): Promise<UserEntity> {
  //   return await this.userRepository.delete({});
  // }

  // async addUserChat(nickname: string, members: UserEntity[]) {
  //   const user = await this.userRepository.findOne({ nickname });

  //   let chatMembers = [user._id];

  //   members?.members?.map((member) => chatMembers.push(member));

  //   const chat = await this.chatRepository.create({
  //     members: chatMembers,
  //     messages: [],
  //   });
  //   user.chats.push(chat.id);
  //   await user.save();
  //   return chat;
  // }

  // async addUserPhoto(nickname: string, files) {
  //   const { image } = files;
  //   console.log(image);
  //   const imagePath = this.fileService.create(FileType.IMAGE, image);
  //   // const user = await this.userModel.findOne({ nickname });
  //   // const user = await this.userRepository.findOneBy({where:});
  //   user.photos.push(imagePath);
  //   await user.save();
  //   return imagePath;
  // }

  // async getUserChats(nickname: string) {
  //   await this.userRepository.find({
  //     relations: {
  //       chats: true,
  //     },
  //     where:{chats:{
  //       members:
  //     }}
  //   });
  //   // const user = await this.userRepository.find({ nickname }).populate({
  //   //   path: 'chats',
  //   //   populate: {
  //   //     path: 'members',
  //   //     model: 'User',
  //   //   },
  //   // });
  //   return user.chats;
  // }
  // async getUserChat(nickname: string, id: ObjectId) {
  //   const user = await this.userModel.findOne({ nickname });
  //   return await this.chatModel
  //     .findOne({ members: user._id, _id: id })
  //     .populate('members');
  // }

  // async deleteUserChat(nickname: string, id: ObjectId) {
  //   const user = await this.userModel.findOne({ nickname });
  //   const chat = await this.chatModel.findById(id);
  //   user.chats = user.chats.filter((chat) => chat.toString() !== id.toString());
  //   chat.members = chat.members.filter(
  //     (member) => member.toString() !== user._id.toString(),
  //   );
  //   await user.save();
  //   await chat.save();
  //   return user.chats;
  // }
}
