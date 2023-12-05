import { PostAddDto } from "../dtos/input";
import { Post } from "../../domain/Post";

export interface PostRepository {
  createPost(user: PostAddDto): Promise<Post>;

  getAllFollowingPosts(id: number): Promise<Post[]>;

  getPostById(id: number): Promise<Post>;

  existPost(id: number): Promise<boolean>;

  updatePost(id: number, user: Partial<PostAddDto>): Promise<Post>;

  deletePost(id: number): Promise<boolean>;
}
