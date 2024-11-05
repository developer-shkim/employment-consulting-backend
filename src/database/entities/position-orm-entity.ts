import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { EducationDegree } from '@entities/position.entity';
import { PositionDetailOrmEntity } from './position-detail-orm-entity';
import { CompanyOrmEntity } from './company-orm-entity';

@Entity({ name: 'positions' })
export class PositionOrmEntity {
  @PrimaryColumn() id: string;

  @ManyToOne(() => CompanyOrmEntity, (company) => company.positions)
  company: CompanyOrmEntity;

  @RelationId((position: PositionOrmEntity) => position.company)
  companyId: string;

  @OneToMany(
    () => PositionDetailOrmEntity,
    (positionDetail) => positionDetail.position,
  )
  positionDetails: PositionDetailOrmEntity[];

  @Column({ comment: '포지션명' })
  name: string;

  @Column({ type: 'int', comment: '최소 연차' })
  minCareerLevel: number;

  @Column({ type: 'int', comment: '최대 연차' })
  maxCareerLevel: number;

  @Column({ type: 'enum', enum: EducationDegree, comment: '최소 학력' })
  minEducationDegree: (typeof EducationDegree)[number];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
