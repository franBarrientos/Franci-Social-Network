import { User } from "../../domain/User";
import { UserDto } from "../dtos/output";
import { PostDtoMapper } from "./postDto.mapper";
import { FollowerDtoMapper } from "./followerDto.mapper";
import { FollowingDtoMapper } from "./followingDto.mapper";

export class UserDtoMapper {
  static toDto(user: User): UserDto {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      posts: user.posts?.map(PostDtoMapper.toDto),
      followers: user.followers?.map(FollowerDtoMapper.toDto),
      followings: user.followings?.map(FollowingDtoMapper.toDto),
    };
  }
}
