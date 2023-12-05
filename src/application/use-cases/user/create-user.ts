import { UserRepository } from "../../repositories/user-repository";
import { UserAddDto } from "../../dtos/input/UserAdd.dto";
import { UserDtoMapper } from "../../mappers/userDto.mapper";
import { UserDto } from "../../dtos/output";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(user: UserAddDto): Promise<UserDto> {
    return this.userRepository.createUser(user).then(UserDtoMapper.toDto);
  }
}
