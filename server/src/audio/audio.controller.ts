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
import { AudioService } from './audio.service';
import { CreateAudioPayload } from './audio.payload';
import { ObjectId } from 'mongoose';

@Controller('/api/audios')
export class AudioController {
  constructor(private audioService: AudioService) {}
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'sound', maxCount: 1 },
    ]),
  )
  create(@UploadedFiles() files, @Body() payload: CreateAudioPayload) {
    return this.audioService.create(files, payload);
  }

  @Get()
  getAll() {
    return this.audioService.getAll();
  }

  @Put(':id/:type')
  update(@Param('id') id: ObjectId, @Param('type') type: string) {
    return this.audioService.update(id, type);
  }
}
