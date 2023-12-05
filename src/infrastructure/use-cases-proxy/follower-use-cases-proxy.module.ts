import { DynamicModule } from "@nestjs/common";
import { RepositoriesModule } from "../typeorm/repositories/repositories.module";
import { CreateFollowerUseCase } from "../../application/use-cases/follower/create-follower";
import { FollowerRepositoryDb } from "../typeorm/repositories/follower-repository";
import { DeleteFollowerUseCase } from "../../application/use-cases/follower/delete-follower";

export class FollowerUseCasesProxyModule {
  static register(): DynamicModule {
    return {
      module: FollowerUseCasesProxyModule,
      imports: [RepositoriesModule],
      providers: [
        {
          provide: CreateFollowerUseCase,
          inject: [FollowerRepositoryDb],
          useFactory: (followerRepository: FollowerRepositoryDb) =>
            new CreateFollowerUseCase(followerRepository),
        },
        {
          provide: DeleteFollowerUseCase,
          inject: [FollowerRepositoryDb],
          useFactory: (followerRepository: FollowerRepositoryDb) =>
            new DeleteFollowerUseCase(followerRepository),
        },
      ],
      exports: [CreateFollowerUseCase, DeleteFollowerUseCase],
    };
  }
}
