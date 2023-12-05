import { DynamicModule } from "@nestjs/common";
import { RepositoriesModule } from "../typeorm/repositories/repositories.module";
import { UserRepositoryDb } from "../typeorm/repositories/user-repository-db";
import { CreateUserUseCase } from "../../application/use-cases/user/create-user";
import { GetAllUserUseCase } from "../../application/use-cases/user/get-all-user";
import { GetOneByIdUseCase } from "../../application/use-cases/user/get-one-by-id";
import { UpdateUserUseCase } from "../../application/use-cases/user/update-user";
import { DeleteUserByIdUseCase } from "../../application/use-cases/user/delete-user-by-id";

export class UserUseCasesProxyModule {
  static register(): DynamicModule {
    return {
      module: UserUseCasesProxyModule,
      imports: [RepositoriesModule],
      providers: [
        {
          provide: CreateUserUseCase,
          inject: [UserRepositoryDb],
          useFactory: (userRepository: UserRepositoryDb) => {
            return new CreateUserUseCase(userRepository);
          },
        },
        {
          provide: GetAllUserUseCase,
          inject: [UserRepositoryDb],
          useFactory: (userRepository: UserRepositoryDb) => {
            return new GetAllUserUseCase(userRepository);
          },
        },
        {
          provide: GetOneByIdUseCase,
          inject: [UserRepositoryDb],
          useFactory: (userRepository: UserRepositoryDb) => {
            return new GetOneByIdUseCase(userRepository);
          },
        },
        {
          provide: UpdateUserUseCase,
          inject: [UserRepositoryDb],
          useFactory: (userRepository: UserRepositoryDb) => {
            return new UpdateUserUseCase(userRepository);
          },
        },
        {
          provide: DeleteUserByIdUseCase,
          inject: [UserRepositoryDb],
          useFactory: (userRepository: UserRepositoryDb) => {
            return new DeleteUserByIdUseCase(userRepository);
          },
        },
      ],
      exports: [
        CreateUserUseCase,
        GetAllUserUseCase,
        GetOneByIdUseCase,
        UpdateUserUseCase,
        DeleteUserByIdUseCase,
      ],
    };
  }
}
