import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Message } from 'src/message/message.schema';
import { User } from 'src/user/user.schema';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop()
  type: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  members: User[];
  @Prop()
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }] })
  messages: Message[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
