import { PositionOrmEntity } from '@database/entities/position-orm-entity';
import { Position } from '@entities/position.entity';
import { PositionDetail } from '@entities/position-detail.entity';
import { Company } from '@entities/company.entity';

export class PositionMapper {
  public static convertToEntity(
    positionOrmEntity: PositionOrmEntity,
  ): Position {
    const { id: positionId, company } = positionOrmEntity;

    const details = positionOrmEntity.positionDetails.map(
      (detail) =>
        new PositionDetail({
          ...detail,
          positionId,
        }),
    );

    return new Position({
      ...positionOrmEntity,
      details,
      company: new Company(company),
    });
  }
}
