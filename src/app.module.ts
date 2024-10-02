import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CompetencyModule } from './modules/competencies/competency.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), CompetencyModule, AuthModule],
})
export class AppModule {}
