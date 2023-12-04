import { LikeDto } from "./Like.dto";
import { CommentDto } from "./Comment.dto";

export interface PostDto {
  id: number;
  title: string;
  img: string;
  likes: LikeDto[];
  comments: CommentDto[];
  createdAt: Date;
  updatedAt: Date;
}
