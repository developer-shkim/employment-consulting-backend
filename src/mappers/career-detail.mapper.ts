import { User } from '../entities/user.entity';
import { CareerDetailOrmEntity } from '../database/entities/career-detail-orm-entity';
import { CareerDetail } from '../entities/career-detail.entity';
import { Career } from '../entities/career.entity';

export class CareerDetailMapper {
  public static convertToEntity(
    ormEntity: CareerDetailOrmEntity,
  ): CareerDetail {
    const careerId = ormEntity.career.id;

    return new CareerDetail({
      careerId,
      ...ormEntity,
      endDate: ormEntity.endDate ?? null,
    });
  }

  public static convertToOrmEntity(
    careerDetail: CareerDetail,
    career: Career,
    user: User,
  ): CareerDetailOrmEntity {
    return CareerDetailOrmEntity.create(careerDetail, career, user);
  }
}
