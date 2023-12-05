import { User } from "./User";

export interface Comment {
  id: number;
  post: number;
  user: User;
  createdAt: Date;
  updatedAt: Date;
  text: string;
}
