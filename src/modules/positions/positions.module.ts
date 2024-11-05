import { Module } from '@nestjs/common';
import { ListPositionsModule } from './use-cases/list-positions/list-positions.module';

@Module({
  imports: [ListPositionsModule],
})
export class PositionsModule {}
