import { Follower } from "../../domain/Follower";
import { FollowerDto } from "../dtos/output";

export class FollowerDtoMapper {
  static toDto(follower: Follower): FollowerDto {
    return {
      id: follower.id,
      user: {
        id: follower.followerUser.id,
        name: follower.followerUser.name,
      },
    };
  }
}
