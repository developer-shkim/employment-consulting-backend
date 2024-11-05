import { CareerDetail } from '@entities/career-detail.entity';

type CareerDetailDtoProps = {
  startDate: Date;
  endDate: Date | null;
  title: string;
  content: string;
  id?: string;
};

export class CareerDetailDto {
  public readonly startDate: Date;
  public readonly endDate: Date | null;
  public readonly title: string;
  public readonly content: string;
  public readonly id?: string;

  constructor(props: CareerDetailDtoProps) {
    const { startDate, endDate, title, content, id } = props;

    this.startDate = startDate;
    this.endDate = endDate;
    this.title = title;
    this.content = content;
    this.id = id;
  }

  public static create(careerDetail: CareerDetail) {
    return new CareerDetailDto(careerDetail);
  }
}
