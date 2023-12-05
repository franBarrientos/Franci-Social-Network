import { Injectable } from "@nestjs/common";
import { TokenService } from "../../application/auth/token-service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtServiceImpl implements TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async signToken(payload: any): Promise<string> {
    return await this.jwtService.signAsync(payload);
  }

  async verifyToken(token: string): Promise<any> {
    return await this.jwtService.verifyAsync(token);
  }
}
