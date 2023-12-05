import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FollowerEntity } from "../entities/follower.entity";
import { FollowerRepository } from "../../../application/repositories/follower-repository";
import { FollowerAddDto } from "../../../application/dtos/input";
import { Follower } from "../../../domain/Follower";
import { UserEntity } from "../entities/user.entity";
import { HttpException } from "@nestjs/common";

export class FollowerRepositoryDb implements FollowerRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(FollowerEntity)
    private readonly followerRepository: Repository<FollowerEntity>,
  ) {}

  async createFollower(follower: FollowerAddDto): Promise<Follower> {
    if (
      !(await this.userRepository.exist({
        where: { id: follower.followedUserId },
      }))
    )
      throw new Error(`User ${follower.followedUserId} does not exist`);

    if (
      !(await this.userRepository.exist({
        where: { id: follower.followerUserId },
      }))
    )
      throw new Error(`User ${follower.followerUserId} does not exist`);

    if (
      await this.followerRepository.exist({
        where: {
          followedUser: { id: follower.followedUserId },
          followerUser: { id: follower.followerUserId },
        },
      })
    )
      throw new Error(`Follower already exists`);

    const newFollower = new FollowerEntity();
    newFollower.followedUser = await this.userRepository.findOneBy({
      id: follower.followedUserId,
    });
    newFollower.followerUser = await this.userRepository.findOneBy({
      id: follower.followerUserId,
    });
    return this.followerRepository.save(newFollower);
  }

  deleteFollower(idUser: number, idFollowed: number): Promise<boolean> {
    return this.followerRepository
      .delete({
        followedUser: { id: idFollowed },
        followerUser: { id: idUser },
      })
      .then((r) => {
        if (r.affected === 0) {
          throw new HttpException("Follower not found", 404);
        }
        return true;
      });
  }
}
