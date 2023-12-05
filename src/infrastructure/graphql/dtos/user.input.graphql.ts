import { UserAddDto } from "../../../application/dtos/input";
import { Field, InputType } from "@nestjs/graphql";
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";

@InputType()
export class UserInputGraphql implements UserAddDto {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(80)
  email: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  password: string;

  @Field(() => String)
  @IsString()
  @IsOptional()
  @MaxLength(80)
  img?: string;
}
