import { CareerDetail } from './career-detail.entity';

export const CareerStatus = ['IN_OFFICE', 'RESIGNED'] as const;

export type CareerProps = {
  id: string;
  userId: string;
  companyName: string;
  startDate: Date;
  endDate: Date | null;
  status: (typeof CareerStatus)[number];
  businessCategory: string;
  details: CareerDetail[];
};

export class Career {
  private _id: string;
  private _userId: string;
  private _companyName: string;
  private _startDate: Date;
  private _endDate: Date | null;
  private _status: (typeof CareerStatus)[number];
  private _businessCategory: string;
  private _details: CareerDetail[];

  constructor(props: CareerProps) {
    const {
      id,
      userId,
      companyName,
      startDate,
      endDate,
      status,
      businessCategory,
      details,
    } = props;

    this._id = id;
    this._userId = userId;
    this._companyName = companyName;
    this._startDate = startDate;
    this._endDate = endDate;
    this._status = status;
    this._businessCategory = businessCategory;
    this._details = details;
  }

  get id(): string {
    return this._id;
  }

  get userId(): string {
    return this._userId;
  }

  get companyName(): string {
    return this._companyName;
  }

  get startDate(): Date {
    return this._startDate;
  }

  get endDate(): Date | null {
    return this._endDate;
  }

  get status(): (typeof CareerStatus)[number] {
    return this._status;
  }

  get businessCategory(): string {
    return this._businessCategory;
  }

  get details(): CareerDetail[] {
    return this._details;
  }
}
