import { Field, Int, ObjectType } from "@nestjs/graphql";
import { PostEntityGraphql } from "./post.entity.graphql";
import { FollowerEntityGraphql } from "./follower.entity.graphql";
import {
  FollowerDto,
  PostDto,
  UserDto,
} from "../../../application/dtos/output";

@ObjectType()
export class UserEntityGraphql implements UserDto {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => String)
  email: string;

  @Field(() => [PostEntityGraphql], { nullable: true })
  posts: PostDto[];

  @Field(() => [FollowerEntityGraphql], { nullable: true })
  followers: FollowerDto[];

  @Field(() => [FollowerEntityGraphql], { nullable: true })
  followings: FollowerDto[];

  @Field(() => String, { nullable: true })
  img?: string;
}
