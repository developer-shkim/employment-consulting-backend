import { PositionDto } from './position.dto';

export class PositionCollectionDto {
  constructor(public readonly positions: PositionDto[]) {}
}
