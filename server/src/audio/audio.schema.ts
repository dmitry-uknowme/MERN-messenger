import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.schema';

export type AudioDocument = Audio & Document;

@Schema()
export class Audio {
  @Prop()
  artist: string;

  @Prop()
  title: string;

  @Prop()
  image: string;

  @Prop()
  sound: string;

  @Prop()
  listens: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  user: User;
}

export const AudioSchema = SchemaFactory.createForClass(Audio);
