import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Chat } from 'src/chat/chat.schema';
import { Audio } from 'src/audio/audio.schema';
import { Post } from 'src/post/post.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  isOnline: boolean;

  @Prop()
  isAdmin: boolean;

  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  password: string;

  @Prop()
  nickname: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  friends: User[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }] })
  chats: Chat[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Audio' }] })
  audios: Audio[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
  posts: Post[];

  @Prop()
  photos: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
