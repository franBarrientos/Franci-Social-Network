import { LikeAddDto } from "../dtos/input";
import { Like } from "../../domain/Like";

export interface LikeRepository {
  createLike(user: LikeAddDto): Promise<Like>;

  deleteLike(idUser: number, idPost: number): Promise<boolean>;
}
