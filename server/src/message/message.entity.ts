import { UserEntity } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MessageEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => UserEntity)
  user: UserEntity;

  @Column()
  text: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
