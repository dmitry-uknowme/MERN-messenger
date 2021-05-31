import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const PostSchema = SchemaFactory.createForClass(Post);
