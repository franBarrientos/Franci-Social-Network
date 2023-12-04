import { UserRepository } from "../../repositories/user-repository";

export class DeleteUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(id: number): Promise<boolean> {
    return this.userRepository.deleteUser(id);
  }
}
