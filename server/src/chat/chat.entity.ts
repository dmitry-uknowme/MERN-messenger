import { MessageEntity } from 'src/message/message.entity';
import { UserEntity } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'chats' })
export class ChatEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: string;

  @OneToMany(() => UserEntity, (user) => user.id)
  members: UserEntity[];

  @OneToMany(() => MessageEntity, (message) => message.id)
  messages: MessageEntity[];

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
