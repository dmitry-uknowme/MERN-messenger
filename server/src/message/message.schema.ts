import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.schema';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop()
  user: User;

  @Prop()
  text: string;

  @Prop()
  date: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
