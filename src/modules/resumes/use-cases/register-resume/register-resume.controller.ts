import { Body, Controller, Post, Req } from '@nestjs/common';
import { RegisterResumeDto } from './dtos/register-resume.dto';
import { ResumeDto } from '../../dtos/resume.dto';
import { Request } from 'express';

@Controller()
export class RegisterResumeController {
  @Post('/resumes')
  async registerResume(
    @Req() request: Request,
    @Body() registerResumeDto: RegisterResumeDto,
  ): Promise<ResumeDto> {
    const { careerHistories, educationHistories } = registerResumeDto;

    return new ResumeDto(careerHistories, educationHistories);
  }
}
