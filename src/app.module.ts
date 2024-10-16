import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CompetencyModule } from './modules/competencies/competency.module';
import { AuthModule } from './modules/auth/auth.module';
import { FitnessModule } from './modules/fitness/fitness.module';
import { ResumesModule } from './modules/resumes/resumes.module';
import { PositionsModule } from './modules/positions/positions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CompetencyModule,
    AuthModule,
    FitnessModule,
    ResumesModule,
    PositionsModule,
  ],
})
export class AppModule {}
