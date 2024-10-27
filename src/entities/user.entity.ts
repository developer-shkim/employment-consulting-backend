import * as bcrypt from 'bcrypt';

export type UserProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  birthDate: string;
};

export class User {
  constructor(props: UserProps) {
    const { id, name, email, password, birthDate } = props;

    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this._birthDate = birthDate;
  }

  private _id: string;

  private _name: string;

  private _email: string;

  private _password: string;

  private _birthDate: string;

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get birthDate(): string {
    return this._birthDate;
  }

  async isMatch(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this._password);
  }
}
