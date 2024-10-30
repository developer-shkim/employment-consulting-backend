import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto } from './dtos/sign-in.dto';
import { SignInService } from './sign-in.service';
import { JwtService } from '@nestjs/jwt';
import { Public } from '@decorators';

@Controller()
export class SignInController {
  constructor(
    private signInService: SignInService,
    private jwtService: JwtService,
  ) {}

  @Public()
  @Post('/auth/sign-in')
  async signIn(@Body() signInDto: SignInDto): Promise<{ accessToken: string }> {
    const { email, password } = signInDto;
    const user = await this.signInService.signIn(email, password);

    return {
      accessToken: await this.jwtService.signAsync({
        sub: user.id,
        email: user.email,
      }),
    };
  }
}
