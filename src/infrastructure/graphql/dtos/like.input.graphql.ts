import { Field, InputType, Int } from "@nestjs/graphql";
import { LikeAddDto } from "../../../application/dtos/input";
import { IsNotEmpty } from "class-validator";

@InputType()
export class LikeInputGraphql implements LikeAddDto {
  @IsNotEmpty()
  @Field(() => Int)
  post: number;

  @IsNotEmpty()
  @Field(() => Int)
  user: number;
}
