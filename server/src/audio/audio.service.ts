import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileService, FileType } from 'src/file/file.service';
import { CreateAudioPayload } from './audio.payload';
import { AudioEntity } from './audio.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class AudioService {
  private logger: Logger = new Logger('AudioService');
  constructor(
    @InjectRepository(AudioEntity)
    private audioRepository: Repository<AudioEntity>,
    private userRepository: Repository<UserEntity>,
    private fileService: FileService,
  ) {}

  // async create(files, payload: CreateAudioPayload): Promise<AudioEntity> {
  //   const { sound } = files;
  //   const soundPath = await this.fileService.create(FileType.AUDIO, sound);
  //   const audio = await this.audioRepository.create({
  //     ...payload,
  //     sound: soundPath,
  //     listen_count: 0,
  //   });

  //   if (files.image) {
  //     const { image } = files;
  //     const imagePath = await this.fileService.create(FileType.IMAGE, image);
  //     audio.image = imagePath;
  //   }

  //   if (payload.user) {
  //     // const user = await this.userModel.findOne({ nickname: payload.user });
  //     const user = await this.userModel.findById(payload.user);
  //     // console.log('user', user);
  //     // audio.user = user._id;
  //     user.audios.push(audio._id);
  //     await user.save();
  //   }

  //   await audio.save();
  //   return audio;
  // }
  async getAll() {
    return await this.audioRepository.find();
  }
  async update(id: string, type: any) {
    const audio = await this.audioRepository.findOneBy({ id });

    // switch (type) {
    //   case type === 'listen':
    //     console.log('listenning');
    //     return audio.listens++;
    //   default:
    //     console.log('no type');
    //   // return await audio.save();
    // }
    if (type === 'listen') {
      audio.listens_count++;
    }
    await audio.save();
    return audio;
  }
}
