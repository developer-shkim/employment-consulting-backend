import { CareerHistoryDto } from '../../../dtos/career-history.dto';
import { EducationHistoryDto } from '../../../dtos/education-history.dto';

export class RegisterResumeDto {
  constructor(
    public readonly careerHistories: CareerHistoryDto[],
    public readonly educationHistories: EducationHistoryDto[],
  ) {}
}
