import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompetencyModule } from './modules/competency/competency.module';

@Module({
  imports: [ConfigModule.forRoot(), CompetencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
