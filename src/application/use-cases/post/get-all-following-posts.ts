import { PostDto } from "../../dtos/output";
import { PostRepository } from "../../repositories/post-repository";
import { PostDtoMapper } from "../../mappers/postDto.mapper";

export class GetAllFollowingPosts {
  constructor(private readonly postRepository: PostRepository) {}

  execute(id: number): Promise<PostDto[]> {
    return this.postRepository
      .getAllFollowingPosts(id)
      .then((u) => u.map(PostDtoMapper.toDto));
  }
}
