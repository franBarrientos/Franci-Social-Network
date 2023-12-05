import { RepositoriesModule } from "../typeorm/repositories/repositories.module";
import { CreateCommentUseCase } from "../../application/use-cases/comment/create-comment";
import { CommentRepositoryDb } from "../typeorm/repositories/comment-repository";
import { DynamicModule } from "@nestjs/common";
import { UpdateCommentUseCase } from "../../application/use-cases/comment/update-comment";
import { DeleteCommentUseCase } from "../../application/use-cases/comment/delete-comment";

export class CommentUseCasesProxyModule {
  static register(): DynamicModule {
    return {
      module: CommentUseCasesProxyModule,
      imports: [RepositoriesModule],
      providers: [
        {
          provide: CreateCommentUseCase,
          inject: [CommentRepositoryDb],
          useFactory: (commentRepository: CommentRepositoryDb) =>
            new CreateCommentUseCase(commentRepository),
        },
        {
          provide: UpdateCommentUseCase,
          inject: [CommentRepositoryDb],
          useFactory: (commentRepository: CommentRepositoryDb) =>
            new UpdateCommentUseCase(commentRepository),
        },
        {
          provide: DeleteCommentUseCase,
          inject: [CommentRepositoryDb],
          useFactory: (commentRepository: CommentRepositoryDb) =>
            new DeleteCommentUseCase(commentRepository),
        },
      ],
      exports: [
        CreateCommentUseCase,
        UpdateCommentUseCase,
        DeleteCommentUseCase,
      ],
    };
  }
}
