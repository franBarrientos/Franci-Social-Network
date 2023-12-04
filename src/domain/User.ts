import { Post } from "./Post";
import { Follower } from "./Follower";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  posts: Post[];
  followers: Follower[];
  followings: Follower[];
}
