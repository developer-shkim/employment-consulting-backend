import { Module } from '@nestjs/common';
import { GetProblemSolvingCompetencyController } from './get-problem-solving-competency.controller';
import { GetProblemSolvingCompetencyService } from './get-problem-solving-competency.service';
import { SolvedAcClient } from '../../../../clients/solved-ac.client';
import { SOLVED_AC_CLIENT } from '../../symbols/di-tokens';

@Module({
  imports: [],
  controllers: [GetProblemSolvingCompetencyController],
  providers: [
    GetProblemSolvingCompetencyService,
    {
      provide: SOLVED_AC_CLIENT,
      useClass: SolvedAcClient,
    },
  ],
})
export class GetProblemSolvingCompetencyModule {}
