import { Module } from "@nestjs/common";
import { UserRepositoryDb } from "./user-repository-db";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { PostEntity } from "../entities/post.entity";
import { PostRepositoryDb } from "./post-repository-db";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PostEntity])],
  providers: [UserRepositoryDb, PostRepositoryDb],
  exports: [UserRepositoryDb, PostRepositoryDb],
})
export class RepositoriesModule {}
