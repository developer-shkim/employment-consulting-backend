export type Duration = {
  startDate: Date;
  endDate: Date | null;
};

export type EducationLevel = 'HIGH_SCHOOL' | 'UNIVERSITY' | 'MASTER' | 'DOCTOR';
export type EducationStatus = 'IN_SCHOOL' | 'DROPPED_OUT' | 'GRADUATED';

export class EducationHistoryDto {
  constructor(
    public readonly schoolName: string,
    public readonly duration: Duration,
    public readonly educationLevel: EducationLevel,
    public readonly educationStatus: EducationStatus,
  ) {}
}
