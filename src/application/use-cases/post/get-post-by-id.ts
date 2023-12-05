import { PostRepository } from "../../repositories/post-repository";
import { PostDtoMapper } from "../../mappers/postDto.mapper";
import { PostDto } from "../../dtos/output";

export class GetPostByIdUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  execute(id: number): Promise<PostDto> {
    return this.postRepository.getPostById(id).then(PostDtoMapper.toDto);
  }
}
