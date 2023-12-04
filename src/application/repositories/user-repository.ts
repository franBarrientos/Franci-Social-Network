import { User } from "../../domain/User";
import { UserAddDto } from "../dtos/input";

export interface UserRepository {
  createUser(user: UserAddDto): Promise<User>;

  getAllUsers(): Promise<User[]>;

  getUserById(id: number): Promise<User>;

  existUser(id: number, email?: string): Promise<boolean>;

  updateUser(id: number, user: Partial<UserAddDto>): Promise<User>;

  deleteUser(id: number): Promise<boolean>;
}
