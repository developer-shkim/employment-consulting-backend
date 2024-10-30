import { Body, Controller, Post, Req } from '@nestjs/common';
import { RegisterResumeDto } from './dtos/register-resume.dto';
import { RegisterCareersService } from './register-careers.service';
import { RegisterEducationsService } from './register-educations.service';
import { ResumeDto } from '../../dtos/resume.dto';

@Controller()
export class RegisterResumeController {
  constructor(
    private registerCareerService: RegisterCareersService,
    private registerEducationService: RegisterEducationsService,
  ) {}

  @Post('/resumes')
  async registerResume(
    @Req() request: unknown,
    @Body() { careers, educations }: RegisterResumeDto,
  ): Promise<ResumeDto> {
    const userId = (request as { user: { id: string } }).user.id;

    return new ResumeDto(
      await this.registerCareerService.registerCareers(userId, careers),
      await this.registerEducationService.registerEducations(
        userId,
        educations,
      ),
    );
  }
}
