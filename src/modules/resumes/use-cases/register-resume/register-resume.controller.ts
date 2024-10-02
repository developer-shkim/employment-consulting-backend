import { Body, Controller, Param, Post } from '@nestjs/common';
import { RegisterResumeDto } from './dtos/register-resume.dto';
import { ResumeDto } from '../../dtos/resume.dto';

@Controller()
export class RegisterResumeController {
  @Post('/users/:userId/resumes')
  async registerResume(
    @Param('userId') userId: string,
    @Body() registerResumeDto: RegisterResumeDto,
  ): Promise<ResumeDto> {
    const { careerHistories, educationHistories } = registerResumeDto;

    return new ResumeDto(careerHistories, educationHistories);
  }
}
