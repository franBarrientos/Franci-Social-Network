import { PostAddDto } from "../../dtos/input";
import { PostRepository } from "../../repositories/post-repository";
import { PostDto } from "../../dtos/output";

export class UpdatePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  execute(id: number, post: Partial<PostAddDto>): Promise<PostDto> {
    return this.postRepository.updatePost(id, post);
  }
}
