import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { PostService } from './post.service';
import { CreatePostPayload } from './post.payload';
import { ObjectId } from 'mongoose';

@Controller('/api/posts')
export class PostController {
  constructor(private postService: PostService) {}
  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() payload: CreatePostPayload) {
    return this.postService.create(files, payload);
  }

  @Get()
  getAll() {
    return this.postService.getAll();
  }
  // @Put(':id/:type')
  // update(@Param('id') id: ObjectId, @Param('type') type: string) {
  //   return this.audioService.update(id, type);
  // }
}
