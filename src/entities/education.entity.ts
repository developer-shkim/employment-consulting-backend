export const EducationDegree = [
  'HIGH_SCHOOL',
  'BACHELOR',
  'MASTER',
  'DOCTORATE',
] as const;

export const EducationStatus = ['IN_SCHOOL', 'GRADUATED'] as const;

export type EducationProps = {
  id: string;
  userId: string;
  schoolName: string;
  startDate: Date;
  endDate: Date | null;
  degree: (typeof EducationDegree)[number];
  status: (typeof EducationStatus)[number];
  content: string;
};

export class Education {
  constructor(props: EducationProps) {
    const {
      id,
      userId,
      schoolName,
      startDate,
      endDate,
      degree,
      status,
      content,
    } = props;

    this._id = id;
    this._userId = userId;
    this._schoolName = schoolName;
    this._startDate = startDate;
    this._endDate = endDate;
    this._degree = degree;
    this._status = status;
    this._content = content;
  }

  private readonly _id: string;
  private readonly _userId: string;
  private readonly _schoolName: string;
  private readonly _startDate: Date;
  private readonly _endDate: Date | null;
  private readonly _degree: (typeof EducationDegree)[number];
  private readonly _status: (typeof EducationStatus)[number];
  private readonly _content: string;

  get id(): string {
    return this._id;
  }

  get userId(): string {
    return this._userId;
  }

  get schoolName(): string {
    return this._schoolName;
  }

  get startDate(): Date {
    return this._startDate;
  }

  get endDate(): Date | null {
    return this._endDate;
  }

  get degree(): (typeof EducationDegree)[number] {
    return this._degree;
  }

  get status(): (typeof EducationStatus)[number] {
    return this._status;
  }

  get content(): string {
    return this._content;
  }
}
