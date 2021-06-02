import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from 'src/chat/chat.schema';
import { FileService } from 'src/file/file.service';
import { Message, MessageSchema } from 'src/message/message.schema';
import {
  UserChatController,
  UserController,
  UserPhotoController,
} from './user.controller';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  controllers: [UserController, UserChatController, UserPhotoController],
  providers: [UserService, FileService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
})
export class UserModule {}
