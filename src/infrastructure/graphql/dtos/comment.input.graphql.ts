import { Field, InputType, Int } from "@nestjs/graphql";
import { CommentAddDto } from "../../../application/dtos/input";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CommentInputGraphql implements CommentAddDto {
  @IsNotEmpty()
  @Field(() => Int)
  postId: number;

  @IsNotEmpty()
  @Field(() => String)
  text: string;

  @IsNotEmpty()
  @Field(() => Int)
  userId: number;
}
