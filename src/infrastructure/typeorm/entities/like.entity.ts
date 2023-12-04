import { Like } from "../../../domain/Like";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostEntity } from "./post.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: "likes" })
export class LikeEntity implements Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, { onDelete: "CASCADE" })
  user: UserEntity;

  @ManyToOne(() => PostEntity, (post) => post.likes, {
    onDelete: "CASCADE",
  })
  post: number;
}
