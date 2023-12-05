import { join } from "path";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ResolversModule } from "./infrastructure/graphql/resolvers.module";
import { ConfigModule } from "@nestjs/config";
import { DbConfigModule } from "./infrastructure/typeorm/config/db-connection";
import { RepositoriesModule } from "./infrastructure/typeorm/repositories/repositories.module";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { RestModule } from "./infrastructure/rest/rest.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ResolversModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DbConfigModule,
    RepositoriesModule,
    RestModule,
  ],
})
export class AppModule {}
