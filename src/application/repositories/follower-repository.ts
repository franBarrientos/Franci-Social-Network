import { FollowerAddDto } from "../dtos/input";
import { Follower } from "../../domain/Follower";

export interface FollowerRepository {
  createFollower(follower: FollowerAddDto): Promise<Follower>;

  deleteFollower(idUser: number, idFollowed: number): Promise<boolean>;
}
