import {
  Education,
  EducationDegree,
  EducationStatus,
} from '../../../entities/education.entity';

type EducationDtoProps = {
  schoolName: string;
  startDate: Date;
  endDate: Date | null;
  degree: (typeof EducationDegree)[number];
  status: (typeof EducationStatus)[number];
  content: string;
  id?: string;
};

export class EducationDto {
  public readonly schoolName: string;
  public readonly startDate: Date;
  public readonly endDate: Date | null;
  public readonly degree: (typeof EducationDegree)[number];
  public readonly status: (typeof EducationStatus)[number];
  public readonly content: string;
  public readonly id?: string;

  constructor(props: EducationDtoProps) {
    const { schoolName, startDate, endDate, degree, status, content, id } =
      props;

    this.schoolName = schoolName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.degree = degree;
    this.status = status;
    this.content = content;
    this.id = id;
  }

  public static create(education: Education) {
    return new EducationDto(education);
  }
}
