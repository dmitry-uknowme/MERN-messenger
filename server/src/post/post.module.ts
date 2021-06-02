import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from 'src/file/file.service';
import { User, UserSchema } from 'src/user/user.schema';
import { PostController } from './post.controller';
import { Post, PostSchema } from './post.schema';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  providers: [PostService, FileService],
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class PostModule {}
