import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserInfoDto } from "../../../application/dtos/output/UserInfo.dto";

@ObjectType()
export class UserInfoEntityGraphqlDto implements UserInfoDto {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}
