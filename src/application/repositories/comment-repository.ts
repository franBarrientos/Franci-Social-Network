import { CommentAddDto } from "../dtos/input";
import { Comment } from "../../domain/Comment";

export interface CommentRepository {
  createComment(follower: CommentAddDto): Promise<Comment>;

  updateComment(id: number, text: string): Promise<Comment>;

  deleteComment(id: number): Promise<boolean>;
}
