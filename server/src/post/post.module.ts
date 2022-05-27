import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileService } from 'src/file/file.service';
import { PostController } from './post.controller';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  providers: [PostService, FileService],
  imports: [TypeOrmModule.forFeature([PostEntity])],
})
export class PostModule {}
