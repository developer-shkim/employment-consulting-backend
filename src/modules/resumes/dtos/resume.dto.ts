import { CareerDto } from './career.dto';
import { EducationDto } from './education.dto';

export class ResumeDto {
  constructor(
    public readonly careers: CareerDto[],
    public readonly educations: EducationDto[],
  ) {
    return {
      careers,
      educations,
    };
  }
}
