import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from './dtos/sign-up.dto';
import { UserDto } from '../../dtos/user.dto';
import { SignUpService } from './sign-up.service';

@Controller()
export class SignUpController {
  constructor(private signUpService: SignUpService) {}
  @Post('/auth/sign-up')
  async signUp(@Body() signUpDto: SignUpDto): Promise<UserDto> {
    return await this.signUpService.signUp(signUpDto);
  }
}
