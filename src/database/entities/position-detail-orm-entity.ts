import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { PositionOrmEntity } from './position-orm-entity';
import { PositionDetailType } from '@entities/position-detail.entity';

@Entity({ name: 'position_details' })
export class PositionDetailOrmEntity {
  @PrimaryColumn() id: string;

  @ManyToOne(() => PositionOrmEntity, (position) => position.positionDetails)
  position: PositionOrmEntity;

  @RelationId(
    (positionDetail: PositionDetailOrmEntity) => positionDetail.position,
  )
  positionId: string;

  @Column({
    type: 'enum',
    enum: PositionDetailType,
    comment: '포지션 상세내용 종류',
  })
  type: (typeof PositionDetailType)[number];

  @Column({ comment: '포지션 상세내용' })
  content: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
