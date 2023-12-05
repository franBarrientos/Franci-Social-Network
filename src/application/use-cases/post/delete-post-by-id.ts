import { PostRepository } from "../../repositories/post-repository";

export class DeletePostByIdUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  execute(id: number): Promise<boolean> {
    return this.postRepository.deletePost(id);
  }
}
