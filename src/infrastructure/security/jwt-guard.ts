import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { JwtServiceImpl } from "./jwt-service-impl";

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private jwtService: JwtServiceImpl) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const token = request.headers.authorization;
    console.log({ token });
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyToken(token);
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request["user"] = payload;
    } catch (error) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
