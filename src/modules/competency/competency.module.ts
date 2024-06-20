import { Module } from '@nestjs/common';
import { GetProblemSolvingCompetencyModule } from './use-cases/get-problem-solving-competency/get-problem-solving-competency.module';

@Module({
  imports: [GetProblemSolvingCompetencyModule],
})
export class CompetencyModule {}
