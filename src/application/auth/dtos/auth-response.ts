import { UserDto } from "../../dtos/output";

export interface AuthResponse {
  token: string;
  user: UserDto;
}
