import { Module } from '@nestjs/common';
import { DatabaseModule } from '@database/database.module';
import { ListPositionsController } from './list-positions.controller';
import { ListPositionsService } from './list-positions.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ListPositionsController],
  providers: [ListPositionsService],
})
export class ListPositionsModule {}
