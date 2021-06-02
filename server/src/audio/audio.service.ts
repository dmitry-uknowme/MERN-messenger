import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { FileService, FileType } from 'src/file/file.service';
import { User, UserDocument } from 'src/user/user.schema';
import { CreateAudioPayload } from './audio.payload';
import { AudioDocument, Audio } from './audio.schema';

@Injectable()
export class AudioService {
  private logger: Logger = new Logger('AudioService');
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Audio.name) private audioModel: Model<AudioDocument>,
    private fileService: FileService,
  ) {}

  async create(files, payload: CreateAudioPayload): Promise<Audio> {
    const { sound } = files;
    const soundPath = await this.fileService.create(FileType.AUDIO, sound);
    const audio = await this.audioModel.create({
      ...payload,
      sound: soundPath,
      listens: 0,
    });

    if (files.image) {
      const { image } = files;
      const imagePath = await this.fileService.create(FileType.IMAGE, image);
      audio.image = imagePath;
    }

    if (payload.user) {
      // const user = await this.userModel.findOne({ nickname: payload.user });
      const user = await this.userModel.findById(payload.user);
      audio.user = user._id;
      user.audios.push(audio._id);
      await user.save();
    }

    await audio.save();
    return audio;
  }
  async getAll() {
    return await this.audioModel.find();
  }
  async update(id: ObjectId, type: any) {
    const audio = await this.audioModel.findById(id);

    // switch (type) {
    //   case type === 'listen':
    //     console.log('listenning');
    //     return audio.listens++;
    //   default:
    //     console.log('no type');
    //   // return await audio.save();
    // }
    if (type === 'listen') {
      audio.listens++;
    }
    await audio.save();
    return audio;
  }
}
