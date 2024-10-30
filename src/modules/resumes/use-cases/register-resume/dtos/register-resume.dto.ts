import { CareerDto } from '../../../dtos/career.dto';
import { EducationDto } from '../../../dtos/education.dto';

export class RegisterResumeDto {
  constructor(
    public readonly careers: CareerDto[],
    public readonly educations: EducationDto[],
  ) {}
}
