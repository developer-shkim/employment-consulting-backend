import { Module } from '@nestjs/common';
import { RegisterResumeController } from './register-resume.controller';

@Module({
  controllers: [RegisterResumeController],
})
export class RegisterResumeModule {}
