import { Module } from '@nestjs/common';
import { SignUpController } from './sign-up.controller';
import { SignUpService } from './sign-up.service';
import { DatabaseModule } from '../../../../database/database.module';
import { userProviders } from '../../../../database/providers/user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SignUpController],
  providers: [SignUpService, ...userProviders],
})
export class SignUpModule {}
