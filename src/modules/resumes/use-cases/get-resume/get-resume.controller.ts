import { Controller, Get } from '@nestjs/common';
import { ResumeDto } from '../../dtos/resume.dto';
import { GetCareersService } from './get-careers.service';
import { GetEducationsService } from './get-educations.service';
import { CurrentUser } from '@decorators';
import { User } from '@entities/user.entity';
import { CareerDto } from '../../dtos/career.dto';
import { EducationDto } from '../../dtos/education.dto';

@Controller()
export class GetResumeController {
  constructor(
    private getCareersService: GetCareersService,
    private getEducationsService: GetEducationsService,
  ) {}

  @Get('/resumes')
  async getResume(@CurrentUser() currentUser: User): Promise<ResumeDto> {
    return new ResumeDto(
      (await this.getCareersService.getCareers(currentUser.id)).map(
        CareerDto.create,
      ),
      (await this.getEducationsService.getEducations(currentUser.id)).map(
        EducationDto.create,
      ),
    );
  }
}
