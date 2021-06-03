import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { FileService, FileType } from 'src/file/file.service';
import { User, UserDocument } from 'src/user/user.schema';
import { CreatePostPayload } from './post.payload';
import { PostDocument, Post } from './post.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private fileService: FileService,
  ) {}

  async create(files, payload: CreatePostPayload): Promise<Post> {
    const post = await this.postModel.create({
      ...payload,
      likes: 0,
      comments: [],
      replies: 0,
      date: Date.now().toString(),
    });

    // if (files.image) {
    //   const { image } = files;
    //   const imagePath = await this.fileService.create(FileType.IMAGE, image);
    //   post.image = imagePath;
    // }

    if (payload.user) {
      // const user = await this.userModel.findOne({ nickname: payload.user });
      const user = await this.userModel.findById(payload.user);
      post.user = user._id;
      user.posts.push(post._id);
      await user.save();
    }
    return post;
  }

  async getAll() {
    return await this.postModel.find();
  }

  // async update(id: ObjectId, type: any) {
  //   const audio = await this.audioModel.findById(id);

  //   if (type === 'listen') {
  //     audio.listens++;
  //   }
  //   await audio.save();
  //   return audio;
  // }
}
