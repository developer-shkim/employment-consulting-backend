import { DataSource } from 'typeorm';
import { CareerOrmEntity } from '../entities/career-orm-entity';
import { DATA_SOURCE } from './database.providers';

export const CAREER_REPOSITORY = Symbol('CAREER_REPOSITORY');

export const careerProviders = [
  {
    provide: CAREER_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CareerOrmEntity),
    inject: [DATA_SOURCE],
  },
];
