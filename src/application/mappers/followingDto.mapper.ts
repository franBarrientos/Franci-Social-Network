import { Follower } from "../../domain/Follower";
import { FollowerDto } from "../dtos/output";

export class FollowingDtoMapper {
  static toDto(follower: Follower): FollowerDto {
    return {
      id: follower.id,
      user: {
        id: follower.followedUser.id,
        name: follower.followedUser.name,
      },
    };
  }
}
