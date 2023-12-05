import { Module } from "@nestjs/common";
import { UserResolver } from "./resolvers/user.resolver";
import { UserUseCasesProxyModule } from "../use-cases-proxy/user-use-cases-proxy.module";
import { PostUseCasesProxyModule } from "../use-cases-proxy/post-use-cases-proxy.module";
import { PostResolver } from "./resolvers/post.resolver";

@Module({
  imports: [
    UserUseCasesProxyModule.register(),
    PostUseCasesProxyModule.register(),
  ],
  providers: [UserResolver, PostResolver],
})
export class ResolversModule {}
