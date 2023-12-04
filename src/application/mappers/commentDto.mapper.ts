import { Comment } from "../../domain/Comment";
import { CommentDto } from "../dtos/output";

export class CommentDtoMapper {
  static toDto(comment: Comment): CommentDto {
    return {
      id: comment.id,
      user: {
        id: comment.user.id,
        name: comment.user.name,
      },
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    };
  }
}
