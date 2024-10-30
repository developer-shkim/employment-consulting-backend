import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';

import { UserOrmEntity } from '@database/entities/user-orm-entity';
import { User } from '@entities/user.entity';
import { UserMapper } from '@mappers/user.mapper';
import { USER_REPOSITORY } from '@database/providers/user.providers';

@Injectable()
export class SignUpService {
  constructor(
    @Inject(USER_REPOSITORY)
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
