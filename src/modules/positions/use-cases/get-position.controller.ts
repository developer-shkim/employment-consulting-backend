import { Controller, Get } from '@nestjs/common';
import { PositionAnalysisDto } from '../dtos/position-analysis.dto';
import { PositionDto } from '../dtos/position.dto';

@Controller()
export class GetPositionController {
  @Get('/positions/:id')
  async getPosition(): Promise<{
    position: PositionDto;
    positionAnalyses: PositionAnalysisDto[];
  }> {
    return {
      position: await this.getMockPosition(),
      positionAnalyses: await this.getMockPositionAnalyses(),
    };
  }

  private async getMockPosition(): Promise<PositionDto> {
    return {
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
    };
  }

  private async getMockPositionAnalyses(): Promise<PositionAnalysisDto[]> {
    return [
      {
        type: 'duty',
        content: '이 직무 분석 결과는 이러이러합니다.',
      },
      {
        type: 'custom',
        content:
          '당신 이력서 기반 분석 결과 이러이러한 부분이 노력 필요합니다.',
      },
    ];
  }
}
