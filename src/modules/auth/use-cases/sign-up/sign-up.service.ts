import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';
import { User } from '../../../../entities/user.entity';

@Injectable()
export class SignUpService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
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
    const user: User = {
      id: randomUUID(),
      email,
      password,
      name,
      birthDate,
    };

    await this.userRepository.insert(user);

    return user;
  }
}
