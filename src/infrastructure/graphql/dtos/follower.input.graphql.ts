import { Field, InputType, Int } from "@nestjs/graphql";
import { FollowerAddDto } from "../../../application/dtos/input";
import { IsNotEmpty } from "class-validator";

@InputType()
export class FollowerInputGraphql implements FollowerAddDto {
  @IsNotEmpty()
  @Field(() => Int)
  followedUserId: number;
  @IsNotEmpty()
  @Field(() => Int)
  followerUserId: number;
}
