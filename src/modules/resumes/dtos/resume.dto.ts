import { CareerHistoryDto } from './career-history.dto';
import { EducationHistoryDto } from './education-history.dto';

export class ResumeDto {
  constructor(
    public readonly careerHistories: CareerHistoryDto[],
    public readonly educationHistories: EducationHistoryDto[],
  ) {}
}
