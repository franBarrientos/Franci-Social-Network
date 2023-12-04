import { Comment } from "../../../domain/Comment";
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { PostEntity } from "./post.entity";
import { UserEntity } from "./user.entity";
import { User } from "../../../domain/User";

@Entity({ name: "comments" })
export class CommentEntity implements Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PostEntity, (post) => post.comments, {
    onDelete: "CASCADE",
  })
  post: number;

  @ManyToOne(() => UserEntity, {
    onDelete: "CASCADE",
  })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
