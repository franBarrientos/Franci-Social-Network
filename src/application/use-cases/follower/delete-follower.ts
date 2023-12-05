import { FollowerRepository } from "../../repositories/follower-repository";

export class DeleteFollowerUseCase {
  constructor(private readonly followerRepository: FollowerRepository) {}

  async execute(idUser: number, idFollowed: number): Promise<boolean> {
    return this.followerRepository.deleteFollower(idUser, idFollowed);
  }
}
