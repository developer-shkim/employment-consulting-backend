export type CompanyProps = {
  id: string;
  name: string;
  logo: string;
  businessCategory: string;
};

export class Company {
  private _id: string;
  private _name: string;
  private _logo: string;
  private _businessCategory: string;

  constructor(props: CompanyProps) {
    const { id, name, logo, businessCategory } = props;

    this._id = id;
    this._name = name;
    this._logo = logo;
    this._businessCategory = businessCategory;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get logo(): string {
    return this._logo;
  }

  get businessCategory(): string {
    return this._businessCategory;
  }
}
