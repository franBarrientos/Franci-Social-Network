import { FollowerRepository } from "../../repositories/follower-repository";
import { FollowerAddDto } from "../../dtos/input";
import { FollowerDto } from "../../dtos/output";
import { FollowingDtoMapper } from "../../mappers/followingDto.mapper";

export class CreateFollowerUseCase {
  constructor(private followerRepository: FollowerRepository) {}

  async execute(follower: FollowerAddDto): Promise<FollowerDto> {
    return this.followerRepository
      .createFollower(follower)
      .then(FollowingDtoMapper.toDto);
  }
}
