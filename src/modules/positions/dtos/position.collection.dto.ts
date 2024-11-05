import { PositionDto } from './position.dto';

export type PositionCollectionDtoProps = {
  positions: PositionDto[];
  page: number;
  limit: number;
};

export class PositionCollectionDto {
  public readonly positions: PositionDto[];
  public readonly page: number;
  public readonly limit: number;

  constructor(props: PositionCollectionDtoProps) {
    const { positions, page, limit } = props;

    this.positions = positions;
    this.page = page;
    this.limit = limit;
  }
}
