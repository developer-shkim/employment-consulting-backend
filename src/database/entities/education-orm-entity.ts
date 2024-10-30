import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserOrmEntity } from './user-orm-entity';
import {
  EducationDegree,
  EducationProps,
  EducationStatus,
} from '../../entities/education.entity';
import { User, UserProps } from '../../entities/user.entity';

@Entity({ name: 'user_educations' })
export class EducationOrmEntity {
  @PrimaryColumn() id: string;

  @ManyToOne(() => UserOrmEntity, (user) => user.educations)
  user: UserOrmEntity;

  @Column({ comment: '학교명' })
  schoolName: string;

  @Column({ comment: '입학일' })
  startDate: Date;

  @Column({ comment: '졸업일', nullable: true })
  endDate?: Date;

  @Column({ type: 'enum', enum: EducationDegree, comment: '학위 종류' })
  degree: (typeof EducationDegree)[number];

  @Column({ type: 'enum', enum: EducationStatus, comment: '재학 상태' })
  status: (typeof EducationStatus)[number];

  @Column({ comment: '상세 내용' })
  content: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  public static create(
    {
      id,
      schoolName,
      startDate,
      endDate,
      degree,
      status,
      content,
    }: EducationProps,
    user: User,
  ): EducationOrmEntity {
    const educationOrmEntity = new EducationOrmEntity();

    educationOrmEntity.id = id;
    educationOrmEntity.user = UserOrmEntity.create(user);
    educationOrmEntity.schoolName = schoolName;
    educationOrmEntity.startDate = startDate;
    educationOrmEntity.endDate = endDate ?? undefined;
    educationOrmEntity.degree = degree;
    educationOrmEntity.status = status;
    educationOrmEntity.content = content;

    return educationOrmEntity;
  }
}
