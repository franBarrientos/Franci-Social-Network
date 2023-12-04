import { UserRepository } from "../../repositories/user-repository";
import { UserDto } from "../../dtos/output/User.dto";
import { UserDtoMapper } from "../../mappers/userDto.mapper";

export class GetOneByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(id: number): Promise<UserDto> {
    return this.userRepository.getUserById(id).then(UserDtoMapper.toDto);
  }
}
