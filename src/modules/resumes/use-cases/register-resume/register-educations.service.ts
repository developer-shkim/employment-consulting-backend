import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { randomUUID } from 'crypto';

import { UserOrmEntity } from '@database/entities/user-orm-entity';
import { UserMapper } from '@mappers/user.mapper';
import { USER_REPOSITORY } from '@database/providers/user.providers';
import { DATA_SOURCE } from '@database/providers/database.providers';
import { EducationDto } from '../../dtos/education.dto';
import { Education } from '@entities/education.entity';
import { EducationMapper } from '@mappers/education.mapper';
import { EducationOrmEntity } from '@database/entities/education-orm-entity';

@Injectable()
export class RegisterEducationsService {
  constructor(
    @Inject(DATA_SOURCE)
    private dataSource: DataSource,
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<UserOrmEntity>,
  ) {}

  async registerEducations(
    userId: string,
    educationDtos: EducationDto[],
  ): Promise<Education[]> {
    const userOrmEntity = await this.userRepository.findOneOrFail({
      where: { id: userId },
    });

    const educations = this.convertToEntities(userId, educationDtos);

    await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(EducationOrmEntity)
      .values(this.convertToOrmEntities(userOrmEntity, educations))
      .execute();

    return educations;
  }

  private convertToEntities(userId: string, educationDtos: EducationDto[]) {
    return educationDtos.map((education) => {
      return new Education({ userId, id: randomUUID(), ...education });
    });
  }

  private convertToOrmEntities(
    userOrmEntity: UserOrmEntity,
    educations: Education[],
  ): EducationOrmEntity[] {
    return educations.map((education) =>
      EducationMapper.convertToOrmEntity(
        education,
        UserMapper.convertToEntity(userOrmEntity),
      ),
    );
  }
}
