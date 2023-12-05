import { EncryptService } from "./encrypt-service";
import { UserRepository } from "../repositories/user-repository";
import { HttpException } from "@nestjs/common";
import { AuthResponse } from "./dtos/auth-response";
import { TokenService } from "./token-service";
import { UserDtoMapper } from "../mappers/userDto.mapper";
import { UserAddDto } from "../dtos/input";

export class AuthService {
  constructor(
    private readonly encryptService: EncryptService,
    private readonly tokenService: TokenService,
    private readonly userRepository: UserRepository,
  ) {}

  async login(email: string, password: string): Promise<AuthResponse> {
    return this.userRepository.getUserByEmail(email).then(async (user) => {
      if (!this.encryptService.compare(password, user.password)) {
        throw new HttpException("Bad Credentials", 401);
      }

      return {
        token: await this.tokenService.signToken({
          name: user.name,
          id: user.id,
        }),
        user: UserDtoMapper.toDto(user),
      };
    });
  }

  async signup(user: UserAddDto): Promise<AuthResponse> {
    if (await this.userRepository.existUser(0, user.email)) {
      throw new HttpException("Email already exists", 400);
    }

    user.password = await this.encryptService.encrypt(user.password);

    const userCreated = await this.userRepository.createUser(user);

    return {
      token: await this.tokenService.signToken({
        name: userCreated.name,
        id: userCreated.id,
      }),
      user: UserDtoMapper.toDto(userCreated),
    };
  }
}
