import { Controller, Get, Param } from '@nestjs/common';
import { ResumeDto } from '../../dtos/resume.dto';

@Controller()
export class GetResumeController {
  @Get('/users/:userId/resumes')
  async registerResume(@Param('userId') userId: string): Promise<ResumeDto> {
    return await this.getMockResume();
  }

  private async getMockResume(): Promise<ResumeDto> {
    return new ResumeDto([], []);
  }
}
