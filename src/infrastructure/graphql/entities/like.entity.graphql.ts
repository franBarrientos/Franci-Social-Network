import { Field, Int, ObjectType } from "@nestjs/graphql";
import { LikeDto } from "../../../application/dtos/output";
import { UserInfoDto } from "../../../application/dtos/output/UserInfo.dto";
import { UserInfoEntityGraphqlDto } from "./UserInfo.entity.graphql.dto";

@ObjectType()
export class LikeEntityGraphql implements LikeDto {
  @Field(() => Int)
  id: number;

  @Field(() => UserInfoEntityGraphqlDto)
  user: UserInfoDto;
}
