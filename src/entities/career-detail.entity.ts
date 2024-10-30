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
  private _careerId: string;
  private _startDate: Date;
  private _endDate: Date | null;
  private _title: string;
  private _content: string;

  get id(): string {
    return this._id;
  }

  get careerId(): string {
    return this._careerId;
  }

  get startDate(): Date {
    return this._startDate;
  }

  get endDate(): Date | null {
    return this._endDate;
  }

  get title(): string {
    return this._title;
  }

  get content(): string {
    return this._content;
  }
}
