import { UserRepository } from "../../repositories/user-repository";
import { UserDto } from "../../dtos/output";
import { UserDtoMapper } from "../../mappers/userDto.mapper";

export class GetAllUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(): Promise<UserDto[]> {
    return this.userRepository
      .getAllUsers()
      .then((u) => u.map(UserDtoMapper.toDto));
  }
}
