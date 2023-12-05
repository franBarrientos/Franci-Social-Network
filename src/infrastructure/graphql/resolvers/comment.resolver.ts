import { Args, Int, Mutation, Resolver } from "@nestjs/graphql";
import { FollowerDto } from "../../../application/dtos/output";
import { CreateCommentUseCase } from "../../../application/use-cases/comment/create-comment";
import { UpdateCommentUseCase } from "../../../application/use-cases/comment/update-comment";
import { DeleteCommentUseCase } from "../../../application/use-cases/comment/delete-comment";
import { CommentInputGraphql } from "../dtos/comment.input.graphql";
import { CommentEntityGraphql } from "../entities/comment.entity.graphql";

@Resolver()
export class CommentResolver {
  constructor(
    private readonly createCommentUseCase: CreateCommentUseCase,
    private readonly updateCommentUseCase: UpdateCommentUseCase,
    private readonly deleteCommentUseCase: DeleteCommentUseCase,
  ) {}

  @Mutation(() => CommentEntityGraphql)
  async createComment(
    @Args("commentAddDto") commentAddDto: CommentInputGraphql,
  ): Promise<FollowerDto> {
    return await this.createCommentUseCase.execute(commentAddDto);
  }

  @Mutation(() => CommentEntityGraphql)
  updateComment(
    @Args("commentId", { type: () => Int }) commentId: number,
    @Args("commentUpdated", { type: () => String }) text: string,
  ): Promise<FollowerDto> {
    return this.updateCommentUseCase.execute(commentId, text);
  }

  @Mutation(() => Boolean)
  deleteComment(
    @Args("idComment", { type: () => Int }) id: number,
  ): Promise<boolean> {
    return this.deleteCommentUseCase.execute(id);
  }
}
