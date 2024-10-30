import {
  EducationDegree,
  EducationStatus,
} from '../../../entities/education.entity';

export class EducationDto {
  constructor(
    public readonly schoolName: string,
    public readonly startDate: Date,
    public readonly endDate: Date | null,
    public readonly degree: (typeof EducationDegree)[number],
    public readonly status: (typeof EducationStatus)[number],
    public readonly content: string,
    public readonly id?: string,
  ) {}
}
