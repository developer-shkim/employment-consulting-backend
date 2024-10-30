import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserOrmEntity } from './user-orm-entity';
import { CareerDetailOrmEntity } from './career-detail-orm-entity';
import { CareerProps, CareerStatus } from '../../entities/career.entity';
import { User } from '../../entities/user.entity';

@Entity({ name: 'user_careers' })
export class CareerOrmEntity {
  @PrimaryColumn() id: string;

  @ManyToOne(() => UserOrmEntity, (user) => user.careers)
  user: UserOrmEntity;

  @OneToMany(() => CareerDetailOrmEntity, (careerDetail) => careerDetail.career)
  careerDetails: CareerDetailOrmEntity[];

  @Column({ comment: '회사명' })
  companyName: string;

  @Column({ comment: '입사일' })
  startDate: Date;

  @Column({ comment: '퇴사일', nullable: true })
  endDate?: Date;

  @Column({ type: 'enum', enum: CareerStatus, comment: '재직 상태' })
  status: (typeof CareerStatus)[number];

  @Column({ comment: '업종 분류' })
  businessCategory: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  public static create(
    {
      id,
      companyName,
      startDate,
      endDate,
      status,
      businessCategory,
    }: CareerProps,
    user: User,
  ): CareerOrmEntity {
    const ormEntity = new CareerOrmEntity();

    ormEntity.id = id;
    ormEntity.user = UserOrmEntity.create(user);
    ormEntity.companyName = companyName;
    ormEntity.startDate = startDate;
    ormEntity.endDate = endDate ?? undefined;
    ormEntity.status = status;
    ormEntity.businessCategory = businessCategory;

    return ormEntity;
  }
}
