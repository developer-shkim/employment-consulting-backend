import { Module } from '@nestjs/common';
import { GetFitnessModule } from './use-cases/get-fitness/get-fitness.module';

@Module({
  imports: [GetFitnessModule],
})
export class FitnessModule {}
