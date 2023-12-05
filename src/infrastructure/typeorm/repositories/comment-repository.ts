import { InjectRepository } from "@nestjs/typeorm";
import { CommentEntity } from "../entities/comment.entity";
import { Repository } from "typeorm";
import { CommentRepository } from "../../../application/repositories/comment-repository";
import { CommentAddDto } from "../../../application/dtos/input";
import { Comment } from "../../../domain/Comment";
import { UserEntity } from "../entities/user.entity";
import { PostEntity } from "../entities/post.entity";
import { HttpException } from "@nestjs/common";

export class CommentRepositoryDb implements CommentRepository {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async createComment(follower: CommentAddDto): Promise<Comment> {
    if (
      !(await this.postRepository.exist({ where: { id: follower.postId } }))
    ) {
      throw new HttpException(`Post with id ${follower.postId} not found`, 404);
    }

    const user = await this.userRepository.findOne({
      where: { id: follower.userId },
    });

    if (!user) {
      throw new HttpException(`User with id ${follower.userId} not found`, 404);
    }

    const comment = new CommentEntity();
    comment.user = user;
    comment.post = follower.postId;
    comment.text = follower.text;
    return this.commentRepository.save(comment);
  }

  deleteComment(id: number): Promise<boolean> {
    return this.commentRepository.delete(id).then((r) => {
      if (r.affected === 0)
        throw new HttpException(`Comment ${id} not found`, 404);
      return true;
    });
  }

  async updateComment(id: number, text: string): Promise<Comment> {
    if (!(await this.commentRepository.exist({ where: { id } }))) {
      throw new HttpException(`Comment ${id} not found`, 404);
    }
    const promise = await this.commentRepository.update({ id }, { text });
    if (promise.affected === 0)
      throw new HttpException(`Comment ${id} not found`, 404);
    return await this.commentRepository.findOne({
      where: { id },
      relations: {
        user: true,
      },
    });
  }
}
