import { DynamicModule } from "@nestjs/common";
import { CreatePostUseCase } from "../../application/use-cases/post/create-post";
import { RepositoriesModule } from "../typeorm/repositories/repositories.module";
import { PostRepositoryDb } from "../typeorm/repositories/post-repository-db";
import { GetAllFollowingPosts } from "../../application/use-cases/post/get-all-following-posts";
import { GetPostByIdUseCase } from "../../application/use-cases/post/get-post-by-id";
import { UpdatePostUseCase } from "../../application/use-cases/post/update-post";
import { DeletePostByIdUseCase } from "../../application/use-cases/post/delete-post-by-id";

export class PostUseCasesProxyModule {
  static register(): DynamicModule {
    return {
      module: PostUseCasesProxyModule,
      imports: [RepositoriesModule],
      providers: [
        {
          provide: CreatePostUseCase,
          inject: [PostRepositoryDb],
          useFactory: (postRepository: PostRepositoryDb) => {
            return new CreatePostUseCase(postRepository);
          },
        },
        {
          provide: GetAllFollowingPosts,
          inject: [PostRepositoryDb],
          useFactory: (postRepository: PostRepositoryDb) => {
            return new GetAllFollowingPosts(postRepository);
          },
        },
        {
          provide: GetPostByIdUseCase,
          inject: [PostRepositoryDb],
          useFactory: (postRepository: PostRepositoryDb) => {
            return new GetPostByIdUseCase(postRepository);
          },
        },
        {
          provide: UpdatePostUseCase,
          inject: [PostRepositoryDb],
          useFactory: (postRepository: PostRepositoryDb) => {
            return new UpdatePostUseCase(postRepository);
          },
        },
        {
          provide: DeletePostByIdUseCase,
          inject: [PostRepositoryDb],
          useFactory: (postRepository: PostRepositoryDb) => {
            return new DeletePostByIdUseCase(postRepository);
          },
        },
      ],
      exports: [
        CreatePostUseCase,
        GetAllFollowingPosts,
        GetPostByIdUseCase,
        UpdatePostUseCase,
        DeletePostByIdUseCase,
      ],
    };
  }
}
