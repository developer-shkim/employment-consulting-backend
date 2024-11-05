export const PositionDetailType = ['REQUIRED', 'OPTIONAL', 'TAG'] as const;

export type PositionDetailProps = {
  id: string;
  positionId: string;
  type: (typeof PositionDetailType)[number];
  content: string;
};

export class PositionDetail {
  private _id: string;
  private _positionId: string;
  private _type: (typeof PositionDetailType)[number];
  private _content: string;

  constructor(props: PositionDetailProps) {
    const { id, positionId, type, content } = props;

    this._id = id;
    this._positionId = positionId;
    this._type = type;
    this._content = content;
  }

  get id(): string {
    return this._id;
  }

  get positionId(): string {
    return this._positionId;
  }

  get type(): (typeof PositionDetailType)[number] {
    return this._type;
  }

  get content(): string {
    return this._content;
  }
}
