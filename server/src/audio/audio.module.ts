import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from 'src/file/file.service';
import { User, UserSchema } from 'src/user/user.schema';
import { AudioController } from './audio.controller';
import { Audio, AudioSchema } from './audio.schema';
import { AudioService } from './audio.service';

@Module({
  controllers: [AudioController],
  providers: [AudioService, FileService],
  imports: [
    MongooseModule.forFeature([{ name: Audio.name, schema: AudioSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class AudioModule {}
