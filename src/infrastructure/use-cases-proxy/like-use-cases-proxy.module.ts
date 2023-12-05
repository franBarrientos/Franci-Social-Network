import { DynamicModule } from "@nestjs/common";
import { CreateLikeUseCase } from "../../application/use-cases/like/create-like-";
import { RepositoriesModule } from "../typeorm/repositories/repositories.module";
import { LikeRepositoryDb } from "../typeorm/repositories/like-repository";
import { DeleteLikeUseCase } from "../../application/use-cases/like/delete-like";

export class LikeUseCasesProxyModule {
  static register(): DynamicModule {
    return {
      module: LikeUseCasesProxyModule,
      imports: [RepositoriesModule],
      providers: [
        {
          provide: CreateLikeUseCase,
          inject: [LikeRepositoryDb],
          useFactory: (likeRepository: LikeRepositoryDb) => {
            return new CreateLikeUseCase(likeRepository);
          },
        },
        {
          provide: DeleteLikeUseCase,
          inject: [LikeRepositoryDb],
          useFactory: (likeRepository: LikeRepositoryDb) => {
            return new DeleteLikeUseCase(likeRepository);
          },
        },
      ],
      exports: [CreateLikeUseCase, DeleteLikeUseCase],
    };
  }
}
