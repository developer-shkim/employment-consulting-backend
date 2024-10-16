type PositionAnalysis = 'duty' | 'custom';

export class PositionAnalysisDto {
  constructor(
    public readonly type: PositionAnalysis,
    public readonly content: string,
  ) {}
}
