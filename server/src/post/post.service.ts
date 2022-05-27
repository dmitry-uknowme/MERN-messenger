import { Injectable, Logger } from '@nestjs/common';
import { FileService, FileType } from 'src/file/file.service';
import { CreatePostPayload } from './post.payload';
import { PostEntity } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private fileService: FileService,
  ) {}

  // async create(files, payload: CreatePostPayload): Promise<PostEntity> {
  //   const post = await this.postRepository.create({
  //     ...payload,
  //     likes: 0,
  //     comments: [],
  //     replies: 0,
  //     date: Date.now().toString(),
  //   });

  //   if (files.image) {
  //     const { image } = files;
  //     const imagePath = await this.fileService.create(FileType.IMAGE, image);
  //     post.image = imagePath;
  //   }

  //   if (payload.user) {
  //     // const user = await this.userModel.findOne({ nickname: payload.user });
  //     const user = await this.userModel.findById(payload.user);
  //     post.user = user._id;
  //     user.posts.push(post._id);
  //     await user.save();
  //   }
  //   return post;
  // }

  // async getAll() {
  //   return await this.postModel.find();
  // }

  // async update(id: ObjectId, type: any) {
  //   const audio = await this.audioModel.findById(id);

  //   if (type === 'listen') {
  //     audio.listens++;
  //   }
  //   await audio.save();
  //   return audio;
  // }
}
