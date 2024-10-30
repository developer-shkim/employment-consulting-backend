import { DataSource } from 'typeorm';
import { EducationOrmEntity } from '../entities/education-orm-entity';
import { DATA_SOURCE } from './database.providers';

export const EDUCATION_REPOSITORY = Symbol('EDUCATION_REPOSITORY');

export const educationProviders = [
  {
    provide: EDUCATION_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EducationOrmEntity),
    inject: [DATA_SOURCE],
  },
];
