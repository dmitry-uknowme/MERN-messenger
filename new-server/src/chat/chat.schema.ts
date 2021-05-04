import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Message } from 'src/message/message.schema';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop()
  type: string;

  @Prop()
  messages: Message[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
