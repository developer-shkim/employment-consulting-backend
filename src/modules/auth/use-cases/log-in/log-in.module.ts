import { Module } from '@nestjs/common';
import { LogInController } from './log-in.controller';

@Module({
  controllers: [LogInController],
})
export class LogInModule {}
