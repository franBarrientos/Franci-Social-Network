import { Field, GraphQLISODateTime, Int, ObjectType } from "@nestjs/graphql";
import { LikeEntityGraphql } from "./like.entity.graphql";
import { CommentEntityGraphql } from "./comment.entity.graphql";
import { CommentDto, LikeDto, PostDto } from "../../../application/dtos/output";

@ObjectType()
export class PostEntityGraphql implements PostDto {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  img: string;

  @Field(() => [LikeEntityGraphql], { nullable: true })
  likes: LikeDto[];

  @Field(() => [CommentEntityGraphql], { nullable: true })
  comments: CommentDto[];

  @Field(() => GraphQLISODateTime, { nullable: true })
  createdAt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedAt: Date;
}
