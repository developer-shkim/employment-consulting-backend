import { Module } from '@nestjs/common';
import { SignInController } from './sign-in.controller';
import { SignInService } from './sign-in.service';
import { userProviders } from '../../../../providers/user.providers';
import { DatabaseModule } from '../../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SignInController],
  providers: [SignInService, ...userProviders],
})
export class SignInModule {}
