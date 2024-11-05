import { PositionDetail } from './position-detail.entity';
import { Company } from './company.entity';

export const EducationDegree = [
  'HIGH_SCHOOL',
  'BACHELOR',
  'MASTER',
  'DOCTORATE',
] as const;

export type PositionProps = {
  id: string;
  company: Company;
  details: PositionDetail[];
  name: string;
  minCareerLevel: number;
  maxCareerLevel: number;
  minEducationDegree: (typeof EducationDegree)[number];
};

export class Position {
  private _id: string;
  private _company: Company;
  private _details: PositionDetail[];
  private _name: string;
  private _minCareerLevel: number;
  private _maxCareerLevel: number;
  private _minEducationDegree: (typeof EducationDegree)[number];

  constructor(props: PositionProps) {
    const {
      id,
      company,
      details,
      name,
      minCareerLevel,
      maxCareerLevel,
      minEducationDegree,
    } = props;

    this._id = id;
    this._company = company;
    this._details = details;
    this._name = name;
    this._minCareerLevel = minCareerLevel;
    this._maxCareerLevel = maxCareerLevel;
    this._minEducationDegree = minEducationDegree;
  }

  get id(): string {
    return this._id;
  }

  get company(): Company {
    return this._company;
  }

  get details(): PositionDetail[] {
    return this._details;
  }

  get name(): string {
    return this._name;
  }

  get minCareerLevel(): number {
    return this._minCareerLevel;
  }

  get maxCareerLevel(): number {
    return this._maxCareerLevel;
  }

  get minEducationDegree(): (typeof EducationDegree)[number] {
    return this._minEducationDegree;
  }
}
