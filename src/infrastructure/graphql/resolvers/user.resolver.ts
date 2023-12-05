import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserUseCase } from "../../../application/use-cases/user/create-user";
import { UserEntityGraphql } from "../entities/user.entity.graphql";
import { GetAllUserUseCase } from "../../../application/use-cases/user/get-all-user";
import { UserDto } from "../../../application/dtos/output";
import { GetOneByIdUseCase } from "../../../application/use-cases/user/get-one-by-id";
import { UserInputGraphql } from "../dtos/user.input.graphql";
import { UpdateUserUseCase } from "../../../application/use-cases/user/update-user";
import { UserUpdateInputGraphql } from "../dtos/user-update.input.graphql";
import { DeleteUserByIdUseCase } from "../../../application/use-cases/user/delete-user-by-id";
import { UseGuards } from "@nestjs/common";
import { JwtGuard } from "../../security/jwt-guard";

@UseGuards(JwtGuard)
@Resolver()
export class UserResolver {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getAllUserUseCase: GetAllUserUseCase,
    private readonly getOneByIdUseCase: GetOneByIdUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserByIdUseCase,
  ) {}

  @Query(() => [UserEntityGraphql])
  async getAllUsers(): Promise<UserDto[]> {
    return await this.getAllUserUseCase.execute();
  }

  @Query(() => UserEntityGraphql)
  async getOneUserById(
    @Args("id", { type: () => Int }) id: number,
  ): Promise<UserDto> {
    return await this.getOneByIdUseCase.execute(id);
  }

  @Mutation(() => UserEntityGraphql)
  async createUser(
    @Args("userToCreate") user: UserInputGraphql,
  ): Promise<UserDto> {
    return await this.createUserUseCase.execute(user);
  }

  @Mutation(() => UserEntityGraphql)
  async updateUser(
    @Args("id", { type: () => Int }) id: number,
    @Args("dataToUpdate") user: UserUpdateInputGraphql,
  ): Promise<UserDto> {
    return await this.updateUserUseCase.execute(id, user);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args("id", { type: () => Int }) id: number) {
    return await this.deleteUserUseCase.execute(id);
  }
}
