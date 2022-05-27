import { ChatEntity } from 'src/chat/chat.entity';
import { PostEntity } from 'src/post/post.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  first_name: string;

  @Column()
  middle_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @OneToMany(
    () => ChatEntity,
    (chat) => chat.members.find((member) => member.id).id,
  )
  // @OneToMany(() => ChatEntity, (chat) => chat.members.find(member=>))
  chats: ChatEntity[];

  // @OneToMany(() => PhotoEntity, (photo) => photo.user)
  // photos: PhotoEntity[];

  @OneToMany(() => PostEntity, (post) => post.author)
  posts: PostEntity[];

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
