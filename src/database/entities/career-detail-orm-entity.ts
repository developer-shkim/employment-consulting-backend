import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CareerOrmEntity } from './career-orm-entity';
import { CareerDetailProps } from '../../entities/career-detail.entity';
import { Career } from '../../entities/career.entity';
import { User } from '../../entities/user.entity';

@Entity({ name: 'user_career_details' })
export class CareerDetailOrmEntity {
  @PrimaryColumn() id: string;

  @ManyToOne(() => CareerOrmEntity, (career) => career.careerDetails)
  career: CareerOrmEntity;

  @Column({ comment: '프로젝트 시작일' })
  startDate: Date;

  @Column({ comment: '프로젝트 종료일', nullable: true })
  endDate?: Date;

  @Column({ comment: '프로젝트명' })
  title: string;

  @Column({ comment: '프로젝트 상세 내용' })
  content: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  public static create(
    { id, startDate, endDate, title, content }: CareerDetailProps,
    career: Career,
    user: User,
  ): CareerDetailOrmEntity {
    const ormEntity = new CareerDetailOrmEntity();

    ormEntity.id = id;
    ormEntity.career = CareerOrmEntity.create(career, user);

    ormEntity.startDate = startDate;
    ormEntity.endDate = endDate ?? undefined;
    ormEntity.title = title;
    ormEntity.content = content;

    return ormEntity;
  }
}
