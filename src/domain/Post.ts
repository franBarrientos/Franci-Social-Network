import { Like } from "./Like";
import { Comment } from "./Comment";

export interface Post {
  id: number;
  title: string;
  img: string;
  user: number;
  likes: Like[];
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}
