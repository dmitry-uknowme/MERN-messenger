import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/user.schema';

export type AudioDocument = Audio & Document;

@Schema()
export class Audio {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  user: User;

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
}

export const AudioSchema = SchemaFactory.createForClass(Audio);
