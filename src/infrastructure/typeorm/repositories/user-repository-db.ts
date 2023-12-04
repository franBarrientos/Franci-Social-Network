import { HttpException, Injectable } from "@nestjs/common";
import { UserRepository } from "../../../application/repositories/user-repository";
import { UserAddDto } from "../../../application/dtos/input";
import { User } from "../../../domain/User";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserRepositoryDb implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  existUser(id: number, email?: string): Promise<boolean> {
    return email
      ? this.userRepository.exist({ where: { email } })
      : this.userRepository.exist({ where: { id } });
  }

  async createUser(user: UserAddDto): Promise<User> {
    if (await this.existUser(0, user.email)) {
      throw new HttpException("Email already exists", 400);
    }
    return this.userRepository.save(user);
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find({
      relations: {
        posts: {
          likes: {
            user: true,
          },
          comments: {
            user: true,
          },
        },
        followers: {
          followerUser: true,
          followedUser: true,
        },
        followings: {
          followerUser: true,
          followedUser: true,
        },
      },
    });
  }

  getUserById(id: number): Promise<User> {
    return this.userRepository
      .findOneOrFail({
        where: { id },
        relations: {
          posts: {
            likes: {
              user: true,
            },
            comments: {
              user: true,
            },
          },
          followers: {
            followerUser: true,
            followedUser: true,
          },
          followings: {
            followerUser: true,
            followedUser: true,
          },
        },
      })
      .catch(() => {
        throw new HttpException(`User ${id} not found`, 404);
      });
  }

  updateUser(id: number, user: Partial<UserAddDto>): Promise<User> {
    return this.userRepository
      .update({ id }, user)
      .then(() => {
        return this.getUserById(id);
      })
      .catch(() => {
        throw new HttpException(`User ${id} not found`, 404);
      });
  }

  async deleteUser(id: number): Promise<boolean> {
    if (!(await this.existUser(id))) {
      throw new HttpException(`User ${id} not found`, 404);
    }

    return this.userRepository
      .delete({ id })
      .then(() => {
        return true;
      })
      .catch((e: Error) => {
        console.log(e);
        throw new HttpException("Something went wrong", 500);
      });
  }
}
