import { Inject, Injectable } from '@nestjs/common';
import { DATA_SOURCE } from '@database/providers/database.providers';
import { DataSource } from 'typeorm';
import { Position } from '@entities/position.entity';
import { PositionOrmEntity } from '@database/entities/position-orm-entity';
import { PositionMapper } from '@mappers/position.mapper';

type PaginationOptions = {
  page: number;
  limit: number;
};

@Injectable()
export class ListPositionsService {
  constructor(@Inject(DATA_SOURCE) private dataSource: DataSource) {}

  async listPositions({ page, limit }: PaginationOptions): Promise<Position[]> {
    return (
      await this.dataSource
        .createQueryBuilder(PositionOrmEntity, 'position')
        .leftJoinAndSelect('position.company', 'company')
        .leftJoinAndSelect('position.positionDetails', 'position_details')
        .skip((page - 1) * limit)
        .take(limit)
        .getMany()
    ).map(PositionMapper.convertToEntity);
  }
}
