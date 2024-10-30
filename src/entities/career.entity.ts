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

  private _id: string;

  get id(): string {
    return this._id;
  }

  private _userId: string;

  get userId(): string {
    return this._userId;
  }

  private _companyName: string;

  get companyName(): string {
    return this._companyName;
  }

  private _startDate: Date;

  get startDate(): Date {
    return this._startDate;
  }

  private _endDate: Date | null;

  get endDate(): Date | null {
    return this._endDate;
  }

  private _status: (typeof CareerStatus)[number];

  get status(): (typeof CareerStatus)[number] {
    return this._status;
  }

  private _businessCategory: string;

  get businessCategory(): string {
    return this._businessCategory;
  }

  private _details: CareerDetail[];

  get details(): CareerDetail[] {
    return this._details;
  }
}
