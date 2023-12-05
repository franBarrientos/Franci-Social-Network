import { User } from "../../../domain/User";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PostEntity } from "./post.entity";
import { FollowerEntity } from "./follower.entity";

@Entity({ name: "users" })
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => PostEntity, (post) => post.user)
  posts: PostEntity[];

  @OneToMany(() => FollowerEntity, (follower) => follower.followedUser)
  followers: FollowerEntity[];

  @OneToMany(() => FollowerEntity, (follower) => follower.followerUser)
  followings: FollowerEntity[];

  @Column({ nullable: true })
  img?: string;
}
