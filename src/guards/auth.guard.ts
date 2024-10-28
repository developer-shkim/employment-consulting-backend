import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from '../constants';
import { IS_PUBLIC_KEY } from '../decorators';
import { Reflector } from '@nestjs/core';
import { Repository } from 'typeorm';
import { UserOrmEntity } from '../database/entities/user-orm-entity';
import { UserMapper } from '../mappers/user.mapper';

type JsonWebToken = {
  sub: string;
  email: string;
  iat: number;
  exp: number;
};

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserOrmEntity>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (this.isPublic(context)) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      request['user'] = await this.getCurrentUser(token);
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  private isPublic(context: ExecutionContext): boolean {
    return this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private async getJsonWebToken(token: string): Promise<JsonWebToken> {
    return await this.jwtService.verifyAsync(token, {
      secret: jwtConstants.secret,
    });
  }

  private async getCurrentUser(token: string) {
    const { email } = await this.getJsonWebToken(token);

    return UserMapper.convertToEntity(
      await this.userRepository.findOneOrFail({ where: { email } }),
    );
  }
}
