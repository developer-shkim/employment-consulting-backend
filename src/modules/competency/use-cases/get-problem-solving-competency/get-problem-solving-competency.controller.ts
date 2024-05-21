import { Controller, Get, Param } from '@nestjs/common';
import { GetProblemSolvingCompetencyService } from './get-problem-solving-competency.service';
import { ProblemSolvingCompetencyDto } from '../../dtos/problem-solving-competency.dto';

@Controller()
export class GetProblemSolvingCompetencyController {
  constructor(
    private getProblemSolvingCompetencyService: GetProblemSolvingCompetencyService,
  ) {}

  @Get('/users/:userId/problem-solving-competency')
  async getProblemSolvingCompetency(
    @Param('userId') userId: string,
  ): Promise<ProblemSolvingCompetencyDto> {
    // TODO: userId 로 사용자 조회해서 handler 을 가져온다.
    const result = await this.getProblemSolvingCompetencyService.execute(
      userId,
    );

    return new ProblemSolvingCompetencyDto(result.tierName, result.rating);
  }
}
