import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from './dtos/sign-up.dto';
import { UserDto } from '../../dtos/user.dto';
import { randomUUID } from 'crypto';

@Controller()
export class SignUpController {
  @Post('/auth/sign-up')
  async signUp(@Body() signUpDto: SignUpDto): Promise<UserDto> {
    const id = randomUUID();
    const { name, email, birthDate } = signUpDto;

    return new UserDto(id, name, email, birthDate);
  }
}
