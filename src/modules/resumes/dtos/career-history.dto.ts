export type Duration = {
  startDate: Date;
  endDate: Date | null;
};

export type CareerStatus = 'IN_OFFICE' | 'RESIGNED';

export class CareerHistoryDto {
  constructor(
    public readonly companyName: string,
    public readonly duration: Duration,
    public readonly businessCodes: string[],
    public readonly careerYear: string | null,
    public readonly careerStatus: CareerStatus,
  ) {}
}
