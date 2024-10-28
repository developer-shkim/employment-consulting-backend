import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CompetencyModule } from './modules/competencies/competency.module';
import { AuthModule } from './modules/auth/auth.module';
import { FitnessModule } from './modules/fitness/fitness.module';
import { ResumesModule } from './modules/resumes/resumes.module';
import { PositionsModule } from './modules/positions/positions.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import { DatabaseModule } from './database/database.module';
import { userProviders } from './providers/user.providers';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CompetencyModule,
    AuthModule,
    FitnessModule,
    ResumesModule,
    PositionsModule,
    DatabaseModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    ...userProviders,
  ],
})
export class AppModule {}
