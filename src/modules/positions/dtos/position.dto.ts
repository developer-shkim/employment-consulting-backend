import {
  EducationDegree,
  Position,
  PositionProps,
} from '@entities/position.entity';
import { CompanyDto } from './company.dto';
import { PositionDetailDto } from './position-detail.dto';

export type PositionDtoProps = {
  company: CompanyDto;
  details: PositionDetailDto[];
  name: string;
  minCareerLevel: number;
  maxCareerLevel: number;
  minEducationDegree: (typeof EducationDegree)[number];
  id?: string;
};

export class PositionDto {
  public readonly company: CompanyDto;
  public readonly details: PositionDetailDto[];
  public readonly name: string;
  public readonly minCareerLevel: number;
  public readonly maxCareerLevel: number;
  public readonly minEducationDegree: (typeof EducationDegree)[number];
  public readonly id?: string;

  constructor(props: PositionProps) {
    const {
      company,
      details,
      name,
      minCareerLevel,
      maxCareerLevel,
      minEducationDegree,
      id,
    } = props;

    this.company = CompanyDto.create(company);
    this.details = details.map(PositionDetailDto.create);
    this.name = name;
    this.minCareerLevel = minCareerLevel;
    this.maxCareerLevel = maxCareerLevel;
    this.minEducationDegree = minEducationDegree;
    this.id = id;
  }

  public static create(position: Position) {
    return new PositionDto(position);
  }
}
