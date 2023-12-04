import { LikeDto } from "../dtos/output";
import { Like } from "../../domain/Like";

export class LikeDtoMapper {
  static toDto(like: Like): LikeDto {
    return {
      id: like.id,
      user: {
        id: like.user.id,
        name: like.user.name,
      },
    };
  }
}
