import { Follower } from "../../../domain/Follower";
import { UserEntity } from "./user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "followers" })
export class FollowerEntity implements Follower {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.followers, {
    onDelete: "CASCADE",
  })
  followedUser: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.followings, {
    onDelete: "CASCADE",
  })
  followerUser: UserEntity;
}
