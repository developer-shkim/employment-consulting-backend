import { CareerStatus } from '../../../entities/career.entity';

export class CareerDto {
  constructor(
    public readonly companyName: string,
    public readonly startDate: Date,
    public readonly endDate: Date | null,
    public readonly status: (typeof CareerStatus)[number],
    public readonly businessCategory: string,
    public readonly details: CareerDetailDto[],
    public readonly id?: string,
  ) {}
}

class CareerDetailDto {
  constructor(
    public readonly startDate: Date,
    public readonly endDate: Date | null,
    public readonly title: string,
    public readonly content: string,
    public readonly id?: string,
  ) {}
}
