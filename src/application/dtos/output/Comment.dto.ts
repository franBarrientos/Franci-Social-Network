import { UserInfoDto } from "./UserInfo.dto";

export interface CommentDto {
  id: number;
  user: UserInfoDto;
  createdAt: Date;
  updatedAt: Date;
}
