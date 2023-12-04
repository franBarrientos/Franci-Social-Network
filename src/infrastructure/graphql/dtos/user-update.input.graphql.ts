import { InputType, PartialType } from "@nestjs/graphql";
import { UserInputGraphql } from "./user.input.graphql";

@InputType()
export class UserUpdateInputGraphql extends PartialType(UserInputGraphql) {}
