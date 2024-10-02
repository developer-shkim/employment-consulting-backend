import { Module } from '@nestjs/common';
import { SignUpModule } from './use-cases/sign-up/sign-up.module';
import { LogInModule } from './use-cases/log-in/log-in.module';

@Module({
  imports: [SignUpModule, LogInModule],
})
export class AuthModule {}
