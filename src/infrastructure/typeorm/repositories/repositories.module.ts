import { Module } from "@nestjs/common";
import { UserRepositoryDb } from "./user-repository-db";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { PostEntity } from "../entities/post.entity";
import { PostRepositoryDb } from "./post-repository-db";
import { LikeEntity } from "../entities/like.entity";
import { LikeRepositoryDb } from "./like-repository";
import { FollowerEntity } from "../entities/follower.entity";
import { FollowerRepositoryDb } from "./follower-repository";
import { CommentEntity } from "../entities/comment.entity";
import { CommentRepositoryDb } from "./comment-repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      PostEntity,
      LikeEntity,
      FollowerEntity,
      CommentEntity,
    ]),
  ],
  providers: [
    UserRepositoryDb,
    PostRepositoryDb,
    LikeRepositoryDb,
    FollowerRepositoryDb,
    CommentRepositoryDb,
  ],
  exports: [
    UserRepositoryDb,
    PostRepositoryDb,
    LikeRepositoryDb,
    FollowerRepositoryDb,
    CommentRepositoryDb,
  ],
})
export class RepositoriesModule {}
