import { DataSource } from 'typeorm';
import { UserOrmEntity } from '../entities/user-orm-entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { CareerOrmEntity } from '../entities/career-orm-entity';
import { CareerDetailOrmEntity } from '../entities/career-detail-orm-entity';
import { EducationOrmEntity } from '../entities/education-orm-entity';
import { PositionOrmEntity } from '../entities/position-orm-entity';
import { PositionDetailOrmEntity } from '../entities/position-detail-orm-entity';
import { CompanyOrmEntity } from '../entities/company-orm-entity';

export const DATA_SOURCE = Symbol('DATA_SOURCE');

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT as unknown as number,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [
          UserOrmEntity,
          CareerOrmEntity,
          CareerDetailOrmEntity,
          EducationOrmEntity,
          PositionOrmEntity,
          PositionDetailOrmEntity,
          CompanyOrmEntity,
        ],
        synchronize: true,
        namingStrategy: new SnakeNamingStrategy(),
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
