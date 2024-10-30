import { Module } from '@nestjs/common';
import { RegisterResumeController } from './register-resume.controller';
import { DatabaseModule } from '../../../../database/database.module';
import { RegisterCareersService } from './register-careers.service';
import { RegisterEducationsService } from './register-educations.service';
import { userProviders } from '../../../../database/providers/user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RegisterResumeController],
  providers: [
    RegisterCareersService,
    RegisterEducationsService,
    ...userProviders,
  ],
})
export class RegisterResumeModule {}
