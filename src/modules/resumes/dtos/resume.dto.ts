import { Career } from '../../../entities/career.entity';
import { Education } from '../../../entities/education.entity';

export class ResumeDto {
  constructor(
    public readonly careers: Career[],
    public readonly educations: Education[],
  ) {
    return {
      careers,
      educations,
    };
  }
}
