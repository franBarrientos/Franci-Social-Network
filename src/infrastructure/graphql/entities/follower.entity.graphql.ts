import { Field, Int, ObjectType } from "@nestjs/graphql";
import { FollowerDto } from "../../../application/dtos/output";
import { UserInfoEntityGraphqlDto } from "./UserInfo.entity.graphql.dto";
import { UserInfoDto } from "../../../application/dtos/output/UserInfo.dto";

@ObjectType()
export class FollowerEntityGraphql implements FollowerDto {
  @Field(() => Int)
  id: number;

  @Field(() => UserInfoEntityGraphqlDto, { nullable: true })
  user: UserInfoDto;
}
