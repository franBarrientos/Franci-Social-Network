import { UserRepository } from "../../repositories/user-repository";
import { UserAddDto } from "../../dtos/input";
import { UserDto } from "../../dtos/output";
import { UserDtoMapper } from "../../mappers/userDto.mapper";

export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(id: number, user: Partial<UserAddDto>): Promise<UserDto> {
    return this.userRepository.updateUser(id, user).then(UserDtoMapper.toDto);
  }
}
