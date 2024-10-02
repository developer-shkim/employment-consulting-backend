import { Module } from '@nestjs/common';
import { RegisterResumeModule } from './use-cases/register-resume/register-resume.module';
import { GetResumeModule } from './use-cases/get-resume/get-resume.module';

@Module({
  imports: [RegisterResumeModule, GetResumeModule],
})
export class ResumesModule {}
