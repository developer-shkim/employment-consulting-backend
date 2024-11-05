import {
  PositionDetail,
  PositionDetailType,
} from '@entities/position-detail.entity';

type PositionDetailDtoProps = {
  type: (typeof PositionDetailType)[number];
  content: string;
  id?: string;
};

export class PositionDetailDto {
  public readonly type: (typeof PositionDetailType)[number];
  public readonly content: string;
  public readonly id?: string;

  constructor(props: PositionDetailDtoProps) {
    const { type, content, id } = props;

    this.type = type;
    this.content = content;
    this.id = id;
  }

  public static create(positionDetail: PositionDetail) {
    return new PositionDetailDto(positionDetail);
  }
}
