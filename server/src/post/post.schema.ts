import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.schema';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  text: string;

  @Prop()
  image: string;

  @Prop()
  likes: number;

  @Prop()
  comments: string[];

  @Prop()
  replies: number;

  @Prop()
  date: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  user: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
