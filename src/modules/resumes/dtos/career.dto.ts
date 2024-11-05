import { Career, CareerStatus } from '../../../entities/career.entity';
import { CareerDetailDto } from './career-detail.dto';

type CareerDtoProps = {
  companyName: string;
  startDate: Date;
  endDate: Date | null;
  status: (typeof CareerStatus)[number];
  businessCategory: string;
  details: CareerDetailDto[];
  id?: string;
};

export class CareerDto {
  public readonly companyName: string;
  public readonly startDate: Date;
  public readonly endDate: Date | null;
  public readonly status: (typeof CareerStatus)[number];
  public readonly businessCategory: string;
  public readonly details: CareerDetailDto[];
  public readonly id?: string;

  constructor(props: CareerDtoProps) {
    const {
      companyName,
      startDate,
      endDate,
      status,
      businessCategory,
      details,
      id,
    } = props;

    this.companyName = companyName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
    this.businessCategory = businessCategory;
    this.details = details.map(CareerDetailDto.create);
    this.id = id;
  }

  public static create(career: Career) {
    return new CareerDto(career);
  }
}
