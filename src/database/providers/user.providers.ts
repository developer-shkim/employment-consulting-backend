import { DataSource } from 'typeorm';
import { UserOrmEntity } from '../entities/user-orm-entity';
import { DATA_SOURCE } from './database.providers';

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserOrmEntity),
    inject: [DATA_SOURCE],
  },
];
