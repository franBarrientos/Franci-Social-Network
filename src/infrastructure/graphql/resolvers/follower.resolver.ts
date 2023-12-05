import { Args, Int, Mutation, Resolver } from "@nestjs/graphql";
import { FollowerEntityGraphql } from "../entities/follower.entity.graphql";
import { FollowerDto } from "../../../application/dtos/output";
import { FollowerInputGraphql } from "../dtos/follower.input.graphql";
import { CreateFollowerUseCase } from "../../../application/use-cases/follower/create-follower";
import { DeleteFollowerUseCase } from "../../../application/use-cases/follower/delete-follower";
import { UseGuards } from "@nestjs/common";
import { JwtGuard } from "../../security/jwt-guard";

@UseGuards(JwtGuard)
@Resolver()
export class FollowerResolver {
  constructor(
    private readonly createFollowerUseCase: CreateFollowerUseCase,
    private readonly deleteFollowerUseCase: DeleteFollowerUseCase,
  ) {}

  @Mutation(() => FollowerEntityGraphql)
  async createFollower(
    @Args("followerAddDto") followerAddDto: FollowerInputGraphql,
  ): Promise<FollowerDto> {
    return await this.createFollowerUseCase.execute(followerAddDto);
  }

  @Mutation(() => Boolean)
  deleteFollower(
    @Args("idUser", { type: () => Int }) idUser: number,
    @Args("idFollowed", { type: () => Int }) idFollowed: number,
  ): Promise<boolean> {
    return this.deleteFollowerUseCase.execute(idUser, idFollowed);
  }
}
