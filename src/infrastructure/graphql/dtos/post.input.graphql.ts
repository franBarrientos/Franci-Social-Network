import { Field, InputType, Int } from "@nestjs/graphql";
import { PostAddDto } from "../../../application/dtos/input";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class PostInputGraphql implements PostAddDto {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  img: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  title: string;

  @Field(() => Int)
  @IsNotEmpty()
  userId: number;
}
