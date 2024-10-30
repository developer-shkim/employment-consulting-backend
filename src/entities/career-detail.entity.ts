export type CareerDetailProps = {
  id: string;
  careerId: string;
  startDate: Date;
  endDate: Date | null;
  title: string;
  content: string;
};

export class CareerDetail {
  constructor(props: CareerDetailProps) {
    const { id, careerId, startDate, endDate, title, content } = props;

    this._id = id;
    this._careerId = careerId;
    this._startDate = startDate;
    this._endDate = endDate;
    this._title = title;
    this._content = content;
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  private _careerId: string;

  get careerId(): string {
    return this._careerId;
  }

  private _startDate: Date;

  get startDate(): Date {
    return this._startDate;
  }

  private _endDate: Date | null;

  get endDate(): Date | null {
    return this._endDate;
  }

  private _title: string;

  get title(): string {
    return this._title;
  }

  private _content: string;

  get content(): string {
    return this._content;
  }
}
