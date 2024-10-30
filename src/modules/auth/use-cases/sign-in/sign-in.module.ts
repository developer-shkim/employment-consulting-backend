import { Module } from '@nestjs/common';
import { SignInController } from './sign-in.controller';
import { SignInService } from './sign-in.service';
import { DatabaseModule } from '../../../../database/database.module';
import { userProviders } from '../../../../database/providers/user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SignInController],
  providers: [SignInService, ...userProviders],
})
export class SignInModule {}
