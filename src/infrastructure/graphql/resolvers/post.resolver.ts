import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreatePostUseCase } from "../../../application/use-cases/post/create-post";
import { GetAllFollowingPosts } from "../../../application/use-cases/post/get-all-following-posts";
import { GetPostByIdUseCase } from "../../../application/use-cases/post/get-post-by-id";
import { UpdatePostUseCase } from "../../../application/use-cases/post/update-post";
import { DeletePostByIdUseCase } from "../../../application/use-cases/post/delete-post-by-id";
import { PostEntityGraphql } from "../entities/post.entity.graphql";
import { PostDto } from "../../../application/dtos/output";
import { PostInputGraphql } from "../dtos/post.input.graphql";
import { PostUpdateInputGraphql } from "../dtos/post-update.input.graphql";

@Resolver()
export class PostResolver {
  constructor(
    private readonly createPostUseCase: CreatePostUseCase,
    private readonly getAllFollowingPostsUseCase: GetAllFollowingPosts,
    private readonly getPostByIdUseCase: GetPostByIdUseCase,
    private readonly updatePostUseCase: UpdatePostUseCase,
    private readonly deletePostByIdUseCase: DeletePostByIdUseCase,
  ) {}

  @Query(() => [PostEntityGraphql])
  async getAllFollowingPosts(
    @Args("id", { type: () => Int }) id: number,
  ): Promise<PostDto[]> {
    return await this.getAllFollowingPostsUseCase.execute(id);
  }

  @Query(() => PostEntityGraphql)
  async getPostById(
    @Args("id", { type: () => Int }) id: number,
  ): Promise<PostDto> {
    return await this.getPostByIdUseCase.execute(id);
  }

  @Mutation(() => PostEntityGraphql)
  async createPost(
    @Args("postToCreate") post: PostInputGraphql,
  ): Promise<PostDto> {
    return await this.createPostUseCase.execute(post);
  }

  @Mutation(() => PostEntityGraphql)
  async updatePost(
    @Args("id", { type: () => Int }) id: number,
    @Args("dataToUpdate") post: PostUpdateInputGraphql,
  ): Promise<PostDto> {
    return await this.updatePostUseCase.execute(id, post);
  }

  @Mutation(() => Boolean)
  async deletePost(
    @Args("id", { type: () => Int }) id: number,
  ): Promise<boolean> {
    return await this.deletePostByIdUseCase.execute(id);
  }
}
