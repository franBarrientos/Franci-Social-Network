import { Module } from "@nestjs/common";
import { UserRepositoryDb } from "./user-repository-db";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserRepositoryDb],
  exports: [UserRepositoryDb],
})
export class RepositoriesModule {}
