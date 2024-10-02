import { Controller, Get, Param } from '@nestjs/common';
import { ResumeDto } from '../../dtos/resume.dto';
import { CareerHistoryDto } from '../../dtos/career-history.dto';
import { EducationHistoryDto } from '../../dtos/education-history.dto';

@Controller()
export class GetResumeController {
  @Get('/users/:userId/resumes')
  async registerResume(@Param('userId') userId: string): Promise<ResumeDto> {
    return await this.getMockResume();
  }

  private async getMockResume(): Promise<ResumeDto> {
    return new ResumeDto(
      [
        new CareerHistoryDto(
          '토스',
          {
            startDate: new Date('2010-10-02T15:00:00.000Z'),
            endDate: new Date('2015-02-11T15:00:00.000Z'),
          },
          ['1', '2', '3'],
          '1년 2개월',
          'IN_OFFICE',
        ),
      ],
      [
        new EducationHistoryDto(
          '인하고등학교',
          {
            startDate: new Date('2010-10-02T15:00:00.000Z'),
            endDate: new Date('2015-02-11T15:00:00.000Z'),
          },
          'HIGH_SCHOOL',
          'GRADUATED',
        ),
        new EducationHistoryDto(
          '인하대학교',
          {
            startDate: new Date('2010-10-02T15:00:00.000Z'),
            endDate: new Date('2015-02-11T15:00:00.000Z'),
          },
          'UNIVERSITY',
          'IN_SCHOOL',
        ),
      ],
    );
  }
}
