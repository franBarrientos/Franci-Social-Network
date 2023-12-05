import { LikeAddDto } from "../../../application/dtos/input";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HttpException, Injectable } from "@nestjs/common";
import { LikeEntity } from "../entities/like.entity";
import { LikeRepository } from "../../../application/repositories/like-repository";
import { Like } from "../../../domain/Like";
import { UserEntity } from "../entities/user.entity";
import { PostEntity } from "../entities/post.entity";

@Injectable()
export class LikeRepositoryDb implements LikeRepository {
  constructor(
    @InjectRepository(LikeEntity)
    private readonly likeRepository: Repository<LikeEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async createLike(likeAddDto: LikeAddDto): Promise<Like> {
    const like = new LikeEntity();

    like.user = await this.userRepository.findOneByOrFail({
      id: likeAddDto.user,
    });

    if (!(await this.postRepository.exist({ where: { id: likeAddDto.post } })))
      throw new HttpException(`Post ${likeAddDto.post} not found`, 400);

    like.post = likeAddDto.post;

    return this.likeRepository.save(like);
  }

  async deleteLike(idUser: number, idPost: number): Promise<boolean> {
    if (!(await this.postRepository.exist({ where: { id: idPost } })))
      throw new HttpException(`Post ${idPost} not found`, 400);

    if (!(await this.userRepository.exist({ where: { id: idUser } })))
      throw new HttpException(`User ${idUser} not found`, 400);

    return this.likeRepository
      .delete({
        user: {
          id: idUser,
        },
        post: idPost,
      })
      .then((r) => {
        if (r.affected === 0) throw new HttpException(`Like not found`, 404);
        return true;
      });
  }
}
