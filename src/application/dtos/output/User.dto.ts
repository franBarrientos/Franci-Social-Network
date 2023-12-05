import { PostDto } from "./Post.dto";
import { FollowerDto } from "./Follower.dto";

export interface UserDto {
  id: number;
  name: string;
  email: string;
  posts: PostDto[];
  followers: FollowerDto[];
  followings: FollowerDto[];
  img?: string;
}
