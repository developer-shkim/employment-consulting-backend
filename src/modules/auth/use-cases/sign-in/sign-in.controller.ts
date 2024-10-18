import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto } from './dtos/sign-in.dto';
import { SignInService } from './sign-in.service';

@Controller()
export class SignInController {
  constructor(private signInService: SignInService) {}

  @Post('/auth/sign-in')
  async logIn(@Body() logInDto: SignInDto): Promise<{ accessToken: string }> {
    const { email, password } = logInDto;

    return await this.signInService.signIn(email, password);
  }
}
