import { LikeRepository } from "../../repositories/like-repository";

export class DeleteLikeUseCase {
  constructor(private readonly likeRepository: LikeRepository) {}

  execute(userId: number, postId: number): Promise<boolean> {
    return this.likeRepository.deleteLike(userId, postId);
  }
}
