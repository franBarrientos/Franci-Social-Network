import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { SecurityModule } from "../security/security.module";
import { AuthService } from "../../application/auth/auth-service";
import { UserRepositoryDb } from "../typeorm/repositories/user-repository-db";
import { RepositoriesModule } from "../typeorm/repositories/repositories.module";
import { JwtServiceImpl } from "../security/jwt-service-impl";
import { BycrypService } from "../security/bycryp-service";

@Module({
  imports: [SecurityModule, RepositoriesModule],
  controllers: [AuthController],
  providers: [
    {
      provide: AuthService,
      inject: [UserRepositoryDb, JwtServiceImpl, BycrypService],
      useFactory: (
        userRepository: UserRepositoryDb,
        jwtService: JwtServiceImpl,
        bycrypService: BycrypService,
      ) => new AuthService(bycrypService, jwtService, userRepository),
    },
  ],
})
export class RestModule {}
