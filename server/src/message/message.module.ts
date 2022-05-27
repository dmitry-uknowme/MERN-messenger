import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from 'src/chat/chat.entity';
import { ChatMessageController } from './message.controller';
import { MessageEntity } from './message.entity';
import { MessageService } from './message.service';

@Module({
  controllers: [ChatMessageController],
  providers: [MessageService],
  imports: [
    TypeOrmModule.forFeature([ChatEntity]),
    TypeOrmModule.forFeature([MessageEntity]),
  ],
})
export class MessageModule {}
