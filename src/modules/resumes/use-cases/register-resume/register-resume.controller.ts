import { Body, Controller, Post } from '@nestjs/common';
import { RegisterResumeDto } from './dtos/register-resume.dto';
import { RegisterCareersService } from './register-careers.service';
import { RegisterEducationsService } from './register-educations.service';
import { ResumeDto } from '../../dtos/resume.dto';
import { CurrentUser } from '@decorators';
import { User } from '@entities/user.entity';
import { CareerDto } from '../../dtos/career.dto';
import { EducationDto } from '../../dtos/education.dto';

@Controller()
export class RegisterResumeController {
  constructor(
    private registerCareerService: RegisterCareersService,
    private registerEducationService: RegisterEducationsService,
  ) {}

  @Post('/resumes')
  async registerResume(
    @CurrentUser() currentUser: User,
    @Body() { careers, educations }: RegisterResumeDto,
  ): Promise<ResumeDto> {
    return new ResumeDto(
      (
        await this.registerCareerService.registerCareers(
          currentUser.id,
          careers,
        )
      ).map((career) => CareerDto.create(career)),
      (
        await this.registerEducationService.registerEducations(
          currentUser.id,
          educations,
        )
      ).map((education) => EducationDto.create(education)),
    );
  }
}
