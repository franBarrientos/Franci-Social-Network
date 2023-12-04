import { UserRepository } from "../../repositories/user-repository";
import { User } from "../../../domain/User";
import { UserAddDto } from "../../dtos/input";

export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(id: number, user: Partial<UserAddDto>): Promise<User> {
    return this.userRepository.updateUser(id, user);
  }
}
