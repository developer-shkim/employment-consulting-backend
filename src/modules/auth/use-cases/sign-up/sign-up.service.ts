import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';

import { User as UserOrmEntity } from '../../../../database/entities/user.entity';
import { User } from '../../../../entities/user.entity';
import { UserMapper } from '../../../../mappers/user.mapper';

@Injectable()
export class SignUpService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserOrmEntity>,
  ) {}

  async signUp({
    email,
    password,
    name,
    birthDate,
  }: {
    email: string;
    password: string;
    name: string;
    birthDate: string;
  }): Promise<User> {
    const user = new User({
      id: randomUUID(),
      email,
      password: await bcrypt.hash(password, await bcrypt.genSalt()),
      name,
      birthDate,
    });

    await this.userRepository.insert(UserMapper.convertToOrmEntity(user));

    return user;
  }
}
