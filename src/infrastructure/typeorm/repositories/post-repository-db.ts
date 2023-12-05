import { HttpException, Injectable } from "@nestjs/common";
import { PostAddDto } from "../../../application/dtos/input";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { PostRepository } from "../../../application/repositories/post-repository";
import { PostEntity } from "../entities/post.entity";
import { Post } from "../../../domain/Post";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class PostRepositoryDb implements PostRepository {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createPost(post: PostAddDto): Promise<Post> {
    if (!(await this.userRepository.exist({ where: { id: post.userId } })))
      throw new HttpException(`User ${post.userId} does not exist`, 400);

    return this.postRepository.save(post);
  }

  async deletePost(id: number): Promise<boolean> {
    if (!(await this.existPost(id))) {
      throw new HttpException(`Post ${id} not found`, 404);
    }

    return this.postRepository
      .delete({ id })
      .then(() => {
        return true;
      })
      .catch((e: Error) => {
        console.log(e);
        throw new HttpException("Something went wrong", 500);
      });
  }

  existPost(id: number): Promise<boolean> {
    return this.postRepository.exist({ where: { id } });
  }

  async getAllFollowingPosts(id: number): Promise<Post[]> {
    return this.postRepository
      .createQueryBuilder("post")
      .leftJoin("post.user", "user")
      .leftJoin("user.followers", "followers")
      .leftJoinAndSelect("post.likes", "likes")
      .leftJoinAndSelect("likes.user", "users")
      .leftJoinAndSelect("post.comments", "comments")
      .leftJoinAndSelect("comments.user", "sub-user")
      .where("followers.followerUser = :id", { id })
      .getMany();
  }

  getPostById(id: number): Promise<Post> {
    return this.postRepository
      .findOneOrFail({
        where: { id },
        relations: {
          likes: true,
          comments: true,
        },
      })
      .catch(() => {
        throw new HttpException(`Post ${id} not found`, 404);
      });
  }

  updatePost(id: number, post: Partial<PostAddDto>): Promise<Post> {
    return this.postRepository
      .update({ id }, post)
      .then(() => {
        return this.getPostById(id);
      })
      .catch(() => {
        throw new HttpException(`Post ${id} not found`, 404);
      });
  }
}
