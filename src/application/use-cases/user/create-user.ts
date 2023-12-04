import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repositories/user-repository";
import { User } from "../../../domain/User";
import { UserAddDto } from "../../dtos/input/UserAdd.dto";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(user: UserAddDto): Promise<User> {
    return this.userRepository.createUser(user);
  }
}
