import { Module } from "@nestjs/common";
import { RepositoriesModule } from "../typeorm/repositories/repositories.module";
import { BycrypService } from "./bycryp-service";
import { JwtServiceImpl } from "./jwt-service-impl";
import { JwtGuard } from "./jwt-guard";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    RepositoriesModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        global: true,
        secret: config.get("JWT_SECRET"),
        signOptions: { expiresIn: config.get("JWT_EXPIRATION") },
      }),
    }),
  ],
  providers: [BycrypService, JwtServiceImpl, JwtGuard],
  exports: [BycrypService, JwtServiceImpl, JwtGuard],
})
export class SecurityModule {}
