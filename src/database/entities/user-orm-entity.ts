import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CareerOrmEntity } from './career-orm-entity';
import { UserProps } from '../../entities/user.entity';
import { EducationOrmEntity } from './education-orm-entity';

@Entity({ name: 'users' })
export class UserOrmEntity {
  @PrimaryColumn() id: string;

  @OneToMany(() => CareerOrmEntity, (career) => career.user)
  careers: CareerOrmEntity[];

  @OneToMany(() => EducationOrmEntity, (education) => education.user)
  educations: EducationOrmEntity[];

  @Column({ comment: '이름' }) name: string;

  @Column({ comment: '이메일 주소', unique: true }) email: string;

  @Column({ comment: '암호화된 비밀번호' }) password: string;

  @Column({ comment: '생년월일(YYMMDD)' }) birthDate: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  public static create({
    id,
    name,
    email,
    password,
    birthDate,
  }: UserProps): UserOrmEntity {
    const userOrmEntity = new UserOrmEntity();

    userOrmEntity.id = id;
    userOrmEntity.name = name;
    userOrmEntity.email = email;
    userOrmEntity.password = password;
    userOrmEntity.birthDate = birthDate;

    return userOrmEntity;
  }
}
