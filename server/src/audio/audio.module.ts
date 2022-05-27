import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileService } from 'src/file/file.service';
import { AudioController } from './audio.controller';
import { AudioEntity } from './audio.entity';
import { AudioService } from './audio.service';

@Module({
  controllers: [AudioController],
  providers: [AudioService, FileService],
  imports: [TypeOrmModule.forFeature([AudioEntity])],
})
export class AudioModule {}
