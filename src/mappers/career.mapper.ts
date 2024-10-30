import { User } from '../entities/user.entity';
import { CareerOrmEntity } from '../database/entities/career-orm-entity';
import { Career } from '../entities/career.entity';
import { CareerDetail } from '../entities/career-detail.entity';

export class CareerMapper {
  public static convertToEntity(careerOrmEntity: CareerOrmEntity): Career {
    const {
      id: careerId,
      user: { id: userId },
      endDate,
    } = careerOrmEntity;

    const details = careerOrmEntity.careerDetails.map(
      (detail) =>
        new CareerDetail({
          careerId,
          ...detail,
          endDate: detail.endDate ?? null,
        }),
    );

    return new Career({
      userId,
      details,
      ...careerOrmEntity,
      endDate: endDate ?? null,
    });
  }

  public static convertToOrmEntity(
    career: Career,
    user: User,
  ): CareerOrmEntity {
    return CareerOrmEntity.create(career, user);
  }
}
