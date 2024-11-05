import { Controller, Get, Query } from '@nestjs/common';
import { ListPositionsService } from './list-positions.service';
import { PositionDto } from '../../dtos/position.dto';
import { PositionCollectionDto } from '../../dtos/position.collection.dto';
import { ListPositionsDto } from './dtos/list-positions.dto';

@Controller()
export class ListPositionsController {
  constructor(private listPositionService: ListPositionsService) {}

  @Get('/positions?')
  async listPositions(
    @Query() dto: ListPositionsDto,
  ): Promise<PositionCollectionDto> {
    const { page = 1, limit = 10 } = dto;

    const positions = (
      await this.listPositionService.listPositions({ page, limit })
    ).map(PositionDto.create);

    return new PositionCollectionDto({ positions, limit, page });
  }
}
