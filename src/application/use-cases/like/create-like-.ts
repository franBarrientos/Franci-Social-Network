import { LikeAddDto } from "../../dtos/input";
import { LikeRepository } from "../../repositories/like-repository";
import { LikeDtoMapper } from "../../mappers/likeDto.mapper";
import { LikeDto } from "../../dtos/output";

export class CreateLikeUseCase {
  constructor(private readonly likeRepository: LikeRepository) {}

  execute(user: LikeAddDto): Promise<LikeDto> {
    return this.likeRepository.createLike(user).then(LikeDtoMapper.toDto);
  }
}
