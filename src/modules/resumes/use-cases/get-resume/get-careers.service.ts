import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Career } from '@entities/career.entity';
import { CareerMapper } from '@mappers/career.mapper';
import { DATA_SOURCE } from '@database/providers/database.providers';
import { CareerOrmEntity } from '@database/entities/career-orm-entity';

@Injectable()
export class GetCareersService {
  constructor(
    @Inject(DATA_SOURCE)
    private dataSource: DataSource,
  ) {}

  async getCareers(userId: string): Promise<Career[]> {
    return (
      await this.dataSource
        .createQueryBuilder(CareerOrmEntity, 'careers')
        .leftJoinAndSelect('careers.careerDetails', 'details')
        .select()
        .where('user_id = :userId', { userId })
        .getMany()
    ).map(CareerMapper.convertToEntity);
  }
}
