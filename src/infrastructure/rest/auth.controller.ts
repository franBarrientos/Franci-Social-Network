import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../../application/auth/auth-service";
import { UserAddDto } from "../../application/dtos/input";
import { LoginRequest } from "../../application/auth/dtos/login-request";

@Controller("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  async login(@Body() loginRequest: LoginRequest) {
    return await this.authService.login(loginRequest.email, loginRequest.email);
  }

  @Post("/signup")
  async signup(@Body() user: UserAddDto) {
    console.log({ user });
    return await this.authService.signup(user);
  }
}
