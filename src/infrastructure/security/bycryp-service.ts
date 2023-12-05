import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { EncryptService } from "../../application/auth/encrypt-service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class BycrypService implements EncryptService {
  constructor(private readonly jwtService: JwtService) {}

  async encrypt(text: string): Promise<string> {
    return await bcrypt.hash(text, 10);
  }

  async compare(text: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(text, hash);
  }
}
