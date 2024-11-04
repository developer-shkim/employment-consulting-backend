import { Module } from '@nestjs/common';
import { GetResumeController } from './get-resume.controller';
import { GetCareersService } from './get-careers.service';
import { GetEducationsService } from './get-educations.service';
import { DatabaseModule } from '@database/database.module';
import { careerProviders } from '@database/providers/career.providers';
import { educationProviders } from '@database/providers/education.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [GetResumeController],
  providers: [
    GetCareersService,
    GetEducationsService,
    ...careerProviders,
    ...educationProviders,
  ],
})
export class GetResumeModule {}
