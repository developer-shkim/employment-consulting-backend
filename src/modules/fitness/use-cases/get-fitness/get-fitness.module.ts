import { Module } from '@nestjs/common';
import { GetFitnessController } from './get-fitness.controller';

@Module({
  controllers: [GetFitnessController],
})
export class GetFitnessModule {}
