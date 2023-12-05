import { InputType, PartialType } from "@nestjs/graphql";
import { PostInputGraphql } from "./post.input.graphql";

@InputType()
export class PostUpdateInputGraphql extends PartialType(PostInputGraphql) {}
