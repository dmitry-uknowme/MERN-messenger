// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import * as mongoose from 'mongoose';
// import { Document } from 'mongoose';
// import { User } from 'src/user/user.schema';

// export type PostDocument = Post & Document;

// @Schema()
// export class Post {
//   @Prop()
//   text: string;

//   @Prop()
//   image: string;

//   @Prop()
//   likes: number;

//   @Prop()
//   comments: string[];

//   @Prop()
//   replies: number;

//   @Prop()
//   date: string;

//   @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
//   user: User;
// }

// export const PostSchema = SchemaFactory.createForClass(Post);

import { UserEntity } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'posts' })
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  // @Column()
  // attachments: string;

  @Column()
  likes_count: number;

  // @Column()
  // comments: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @OneToOne(() => UserEntity)
  author: UserEntity;
}
