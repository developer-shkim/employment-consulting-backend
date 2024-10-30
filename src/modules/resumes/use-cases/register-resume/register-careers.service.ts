import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { randomUUID } from 'crypto';

import { UserOrmEntity } from '@database/entities/user-orm-entity';
import { USER_REPOSITORY } from '@database/providers/user.providers';
import { CareerDto } from '../../dtos/career.dto';
import { Career } from '@entities/career.entity';
import { CareerDetail } from '@entities/career-detail.entity';
import { DATA_SOURCE } from '@database/providers/database.providers';
import { CareerMapper } from '@mappers/career.mapper';
import { UserMapper } from '@mappers/user.mapper';
import { CareerDetailMapper } from '@mappers/career-detail.mapper';
import { CareerOrmEntity } from '@database/entities/career-orm-entity';

@Injectable()
export class RegisterCareersService {
  constructor(
    @Inject(DATA_SOURCE)
    private dataSource: DataSource,
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<UserOrmEntity>,
  ) {}

  async registerCareers(
    userId: string,
    careerDtos: CareerDto[],
  ): Promise<Career[]> {
    const userOrmEntity = await this.userRepository.findOneOrFail({
      where: { id: userId },
      relations: ['careers', 'educations'],
    });

    const careers = this.convertToEntities(userId, careerDtos);

    const careerOrmEntities = this.covertToOrmEntities(userOrmEntity, careers);

    await this.dataSource.manager.save(careerOrmEntities);
    await this.dataSource.manager.save(
      careerOrmEntities.map((career) => career.careerDetails).flat(),
    );

    return careers;
  }

  private convertToEntities(userId: string, careerDtos: CareerDto[]): Career[] {
    return careerDtos.map((career) => {
      const careerId = randomUUID();

      return new Career({
        userId,
        id: careerId,
        ...career,
        details: career.details.map(
          (detail) =>
            new CareerDetail({ careerId, id: randomUUID(), ...detail }),
        ),
      });
    });
  }

  private covertToOrmEntities(
    userOrmEntity: UserOrmEntity,
    careers: Career[],
  ): CareerOrmEntity[] {
    return careers.map((career) => {
      const careerOrmEntity = CareerMapper.convertToOrmEntity(
        career,
        UserMapper.convertToEntity(userOrmEntity),
      );

      careerOrmEntity.careerDetails = career.details.map((detail) =>
        CareerDetailMapper.convertToOrmEntity(
          detail,
          career,
          UserMapper.convertToEntity(userOrmEntity),
        ),
      );

      return careerOrmEntity;
    });
  }
}
