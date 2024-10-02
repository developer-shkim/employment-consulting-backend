import { Controller, Get, Param } from '@nestjs/common';
import { FitnessDto } from '../../dtos/fitness.dto';

@Controller()
export class GetFitnessController {
  @Get('/users/:userId/companies/:companyId/fitness')
  async registerResume(
    @Param('userId') userId: string,
    @Param('companyId') companyId: string,
  ): Promise<FitnessDto> {
    return await this.getMockFintess();
  }

  private async getMockFintess(): Promise<FitnessDto> {
    return new FitnessDto(0.52, 0.33, 0.6);
  }
}
