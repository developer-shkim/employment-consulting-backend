import { Module } from '@nestjs/common';
import { GetPositionController } from './use-cases/get-position.controller';
import { GetPositionCollectionController } from './use-cases/get-position-collection.controller';

@Module({
  controllers: [GetPositionController, GetPositionCollectionController],
})
export class PositionsModule {}
