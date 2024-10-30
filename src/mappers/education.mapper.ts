import { User } from '../entities/user.entity';
import { EducationOrmEntity } from '../database/entities/education-orm-entity';
import { Education } from '../entities/education.entity';

export class EducationMapper {
  public static convertToEntity(
    educationOrmEntity: EducationOrmEntity,
  ): Education {
    const userId = educationOrmEntity.user.id;

    return new Education({
      userId,
      ...educationOrmEntity,
      endDate: educationOrmEntity.endDate ?? null,
    });
  }

  public static convertToOrmEntity(
    education: Education,
    user: User,
  ): EducationOrmEntity {
    return EducationOrmEntity.create(education, user);
  }
}
