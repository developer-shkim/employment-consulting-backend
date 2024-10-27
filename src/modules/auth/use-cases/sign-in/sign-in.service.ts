import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User as UserOrmEntity } from '../../../../database/entities/user.entity';
import { User } from '../../../../entities/user.entity';
import { UserMapper } from '../../../../mappers/user.mapper';

@Injectable()
export class SignInService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserOrmEntity>,
  ) {}

  async signIn(email: string, password: string): Promise<User> {
    const user = UserMapper.convertToEntity(
      await this.userRepository.findOneOrFail({ where: { email } }),
    );

    if (!(await user?.isMatch(password))) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
