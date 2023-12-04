import { Post } from "../../domain/Post";
import { PostDto } from "../dtos/output";
import { CommentDtoMapper } from "./commentDto.mapper";
import { LikeDtoMapper } from "./likeDto.mapper";

export class PostDtoMapper {
  static toDto(post: Post): PostDto {
    return {
      id: post.id,
      title: post.title,
      img: post.img,
      likes: post.likes?.map(LikeDtoMapper.toDto),
      comments: post.comments?.map(CommentDtoMapper.toDto),
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
  }
}
