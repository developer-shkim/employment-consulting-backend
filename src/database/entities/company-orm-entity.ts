import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PositionOrmEntity } from './position-orm-entity';

@Entity({ name: 'companies' })
export class CompanyOrmEntity {
  @PrimaryColumn() id: string;

  @OneToMany(() => PositionOrmEntity, (position) => position.company)
  positions: PositionOrmEntity[];

  @Column({ comment: '회사명' })
  name: string;

  @Column({ comment: '회사 로고 url' })
  logo: string;

  @Column({ comment: '회사 업종 분류' })
  businessCategory: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
