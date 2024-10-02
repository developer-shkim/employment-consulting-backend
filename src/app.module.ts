import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CompetencyModule } from './modules/competencies/competency.module';

@Module({
  imports: [ConfigModule.forRoot(), CompetencyModule],
})
export class AppModule {}
