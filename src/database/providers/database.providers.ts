import { DataSource } from 'typeorm';
import { UserOrmEntity } from '../entities/user-orm-entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { CareerOrmEntity } from '../entities/career-orm-entity';
import { CareerDetailOrmEntity } from '../entities/career-detail-orm-entity';
import { EducationOrmEntity } from '../entities/education-orm-entity';

export const DATA_SOURCE = Symbol('DATA_SOURCE');

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'admin',
        password: 'password',
        database: 'emp_consulting',
        entities: [
          UserOrmEntity,
          CareerOrmEntity,
          CareerDetailOrmEntity,
          EducationOrmEntity,
        ],
        synchronize: true,
        namingStrategy: new SnakeNamingStrategy(),
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
