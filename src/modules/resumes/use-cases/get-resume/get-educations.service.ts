import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { EducationMapper } from '@mappers/education.mapper';
import { Education } from '@entities/education.entity';
import { EducationOrmEntity } from '@database/entities/education-orm-entity';
import { DATA_SOURCE } from '@database/providers/database.providers';

@Injectable()
export class GetEducationsService {
  constructor(
    @Inject(DATA_SOURCE)
    private dataSource: DataSource,
  ) {}

  async getEducations(userId: string): Promise<Education[]> {
    return (
      await this.dataSource
        .createQueryBuilder(EducationOrmEntity, 'educations')
        .select()
        .where('user_id = :userId', { userId })
        .getMany()
    ).map(EducationMapper.convertToEntity);
  }
}
