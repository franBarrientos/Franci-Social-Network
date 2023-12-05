import { Field, GraphQLISODateTime, Int, ObjectType } from "@nestjs/graphql";
import { CommentDto } from "../../../application/dtos/output";
import { UserInfoEntityGraphqlDto } from "./UserInfo.entity.graphql.dto";
import { UserInfoDto } from "../../../application/dtos/output/UserInfo.dto";

@ObjectType()
export class CommentEntityGraphql implements CommentDto {
  @Field(() => Int)
  id: number;

  @Field(() => UserInfoEntityGraphqlDto)
  user: UserInfoDto;

  @Field(() => GraphQLISODateTime, { nullable: true })
  createdAt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  text: string;
}
