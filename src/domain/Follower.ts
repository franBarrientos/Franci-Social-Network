import { User } from "./User";

export interface Follower {
  id: number;
  followedUser: User;
  followerUser: User;
}
