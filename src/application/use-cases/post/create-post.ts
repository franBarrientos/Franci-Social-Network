import { PostRepository } from "../../repositories/post-repository";
import { PostAddDto } from "../../dtos/input";
import { PostDto } from "../../dtos/output";
import { PostDtoMapper } from "../../mappers/postDto.mapper";

export class CreatePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  execute(post: PostAddDto): Promise<PostDto> {
    return this.postRepository.createPost(post).then(PostDtoMapper.toDto);
  }
}
