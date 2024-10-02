import { Module } from '@nestjs/common';
import { GetResumeController } from './get-resume.controller';

@Module({
  controllers: [GetResumeController],
})
export class GetResumeModule {}
