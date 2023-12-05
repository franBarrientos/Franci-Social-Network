import { CommentRepository } from "../../repositories/comment-repository";
import { CommentDtoMapper } from "../../mappers/commentDto.mapper";
import { CommentDto } from "../../dtos/output";
import { CommentAddDto } from "../../dtos/input";

export class CreateCommentUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  execute(follower: CommentAddDto): Promise<CommentDto> {
    return this.commentRepository
      .createComment(follower)
      .then(CommentDtoMapper.toDto);
  }
}
