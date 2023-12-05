import { Module } from "@nestjs/common";
import { UserResolver } from "./resolvers/user.resolver";
import { UserUseCasesProxyModule } from "../use-cases-proxy/user-use-cases-proxy.module";
import { PostUseCasesProxyModule } from "../use-cases-proxy/post-use-cases-proxy.module";
import { PostResolver } from "./resolvers/post.resolver";
import { LikeResolver } from "./resolvers/like.resolver";
import { LikeUseCasesProxyModule } from "../use-cases-proxy/like-use-cases-proxy.module";
import { FollowerUseCasesProxyModule } from "../use-cases-proxy/follower-use-cases-proxy.module";
import { FollowerResolver } from "./resolvers/follower.resolver";
import { CommentResolver } from "./resolvers/comment.resolver";
import { CommentUseCasesProxyModule } from "../use-cases-proxy/comment-use-cases-proxy.module";

@Module({
  imports: [
    UserUseCasesProxyModule.register(),
    PostUseCasesProxyModule.register(),
    LikeUseCasesProxyModule.register(),
    FollowerUseCasesProxyModule.register(),
    CommentUseCasesProxyModule.register(),
  ],
  providers: [
    UserResolver,
    PostResolver,
    LikeResolver,
    FollowerResolver,
    CommentResolver,
  ],
})
export class ResolversModule {}
