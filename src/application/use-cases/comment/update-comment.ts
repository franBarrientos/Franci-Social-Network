import { CommentRepository } from "../../repositories/comment-repository";
import { CommentDto } from "../../dtos/output";
import { CommentDtoMapper } from "../../mappers/commentDto.mapper";

export class UpdateCommentUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  execute(id: number, text: string): Promise<CommentDto> {
    return this.commentRepository
      .updateComment(id, text)
      .then(CommentDtoMapper.toDto);
  }
}
