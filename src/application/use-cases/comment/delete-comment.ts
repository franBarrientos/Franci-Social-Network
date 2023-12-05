import { CommentRepository } from "../../repositories/comment-repository";

export class DeleteCommentUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  execute(id: number): Promise<boolean> {
    return this.commentRepository.deleteComment(id);
  }
}
