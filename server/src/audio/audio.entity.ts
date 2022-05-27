import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class AudioEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  artist: string;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  sound: string;

  @Column()
  listens_count: number;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
