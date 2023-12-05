import { Args, Int, Mutation, Resolver } from "@nestjs/graphql";
import { CreateLikeUseCase } from "../../../application/use-cases/like/create-like-";
import { DeleteLikeUseCase } from "../../../application/use-cases/like/delete-like";
import { LikeInputGraphql } from "../dtos/like.input.graphql";
import { LikeEntityGraphql } from "../entities/like.entity.graphql";
import { LikeDto } from "../../../application/dtos/output";

@Resolver()
export class LikeResolver {
  constructor(
    private readonly createLikeUseCase: CreateLikeUseCase,
    private readonly deleteLikeUseCase: DeleteLikeUseCase,
  ) {}

  @Mutation(() => LikeEntityGraphql)
  async createLike(
    @Args("likeAddDto") likeAddDto: LikeInputGraphql,
  ): Promise<LikeDto> {
    return await this.createLikeUseCase.execute(likeAddDto);
  }

  @Mutation(() => Boolean)
  async deleteLike(
    @Args("idUser", { type: () => Int }) idUser: number,
    @Args("idPost", { type: () => Int }) idPost: number,
  ): Promise<boolean> {
    return await this.deleteLikeUseCase.execute(idUser, idPost);
  }
}
