import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { FileService, FileType } from 'src/file/file.service';
import { CreateAudioPayload } from './audio.payload';
import { AudioDocument, Audio } from './audio.schema';

@Injectable()
export class AudioService {
  private logger: Logger = new Logger('AudioService');
  constructor(
    // @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
    @InjectModel(Audio.name) private audioModel: Model<AudioDocument>,
    private fileService: FileService,
  ) {}

  async create(files, payload: CreateAudioPayload): Promise<Audio> {
    const { image, sound } = files;
    const imagePath = await this.fileService.create(FileType.IMAGE, image);
    const soundPath = await this.fileService.create(FileType.AUDIO, sound);
    return await this.audioModel.create({
      ...payload,
      image: imagePath,
      sound: soundPath,
      listens: 0,
    });
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

  // async addListen(id: ObjectId) {
  //   const audio = await this.audioModel.findById(id);
  //   audio.listens++;
  //   audio.save();
  // }
}
