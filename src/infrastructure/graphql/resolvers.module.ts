import { Module } from "@nestjs/common";
import { UserResolver } from "./resolvers/user.resolver";
import { UseCasesProxyModule } from "../use-cases-proxy/use-cases-proxy.module";

@Module({
  imports: [UseCasesProxyModule.register()],
  providers: [UserResolver],
})
export class ResolversModule {}
