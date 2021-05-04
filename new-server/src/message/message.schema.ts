import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop()
  isMy: boolean;

  @Prop()
  text: string;

  @Prop()
  hash: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
