import { Module } from '@nestjs/common';
import { SignUpController } from './sign-up.controller';
import { SignUpService } from './sign-up.service';
import { userProviders } from '../../../../providers/user.providers';
import { DatabaseModule } from '../../../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SignUpController],
  providers: [SignUpService, ...userProviders],
})
export class SignUpModule {}
