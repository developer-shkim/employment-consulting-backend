import { Controller, Get } from '@nestjs/common';
import { PositionDto } from '../dtos/position.dto';
import { PositionCollectionDto } from '../dtos/position.collection.dto';

@Controller()
export class GetPositionCollectionController {
  @Get('/positions')
  async getPositionCollection(): Promise<PositionCollectionDto> {
    const positions = await this.getMockPositionCollection();

    return new PositionCollectionDto(positions);
  }

  private async getMockPositionCollection(): Promise<PositionDto[]> {
    return [
      {
        id: '83b15213-645a-4dbf-8755-a9528e7ccca8',
        name: 'Backend Engineer',
        companyLogo: 'https://static.toss.im/icons/svg/logo-toss-blue.svg',
        companyName: '토스',
        fitness: 0.85,
        requiredCompetencies: [
          '대용량 트래픽 경험을 필요로 합니다.',
          'DB 설계 능력을 필요로 합니다.',
        ],
        optionalCompetencies: ['영어 회화 능력이 있으면 좋습니다.'],
      },
      {
        id: '46265943-57d1-47f9-92e8-8c63987cc5a0',
        name: 'Frontend Engineer',
        companyLogo: 'https://static.toss.im/icons/svg/logo-toss-blue.svg',
        companyName: '토스',
        fitness: 0.3,
        requiredCompetencies: [
          '디자인 시스템 구축 경험을 필요로 합니다.',
          'react.js 에 대한 높은 이해도를 필요로 합니다.',
        ],
        optionalCompetencies: ['백엔드 개발 경험이 있으면 좋습니다.'],
      },
    ];
  }
}
