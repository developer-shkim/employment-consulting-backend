import { Module } from '@nestjs/common';
import { SignUpModule } from './use-cases/sign-up/sign-up.module';
import { SignInModule } from './use-cases/sign-in/sign-in.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../constants';

@Module({
  imports: [
    SignUpModule,
    SignInModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}
