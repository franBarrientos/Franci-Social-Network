import { RepositoriesModule } from "../typeorm/repositories/repositories.module";
import { CreateCommentUseCase } from "../../application/use-cases/comment/create-comment";
import { CommentRepositoryDb } from "../typeorm/repositories/comment-repository";
import { Module } from "@nestjs/common";
import { UpdateCommentUseCase } from "../../application/use-cases/comment/update-comment";
import { DeleteCommentUseCase } from "../../application/use-cases/comment/delete-comment";

@Module({
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
  exports: [CreateCommentUseCase, UpdateCommentUseCase, DeleteCommentUseCase],
})
export class CommentUseCasesProxyModule {}
