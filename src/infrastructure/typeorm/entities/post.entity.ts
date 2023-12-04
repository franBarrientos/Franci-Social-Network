import { UserEntity } from "./user.entity";
import { Post } from "../../../domain/Post";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { LikeEntity } from "./like.entity";
import { CommentEntity } from "./comment.entity";

@Entity({ name: "posts" })
export class PostEntity implements Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  img: string;

  @ManyToOne(() => UserEntity, (user) => user.posts, {
    onDelete: "CASCADE",
  })
  user: number;

  @OneToMany(() => LikeEntity, (like) => like.post)
  likes: LikeEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
