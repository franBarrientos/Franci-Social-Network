import { User } from "./User";

export interface Like {
  id: number;
  post: number;
  user: User;
}
