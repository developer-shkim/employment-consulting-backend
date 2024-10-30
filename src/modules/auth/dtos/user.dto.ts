import { User } from '@entities/user.entity';

export class UserDto {
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;
  public readonly birthDate: string;

  constructor(user: User) {
    const { id, name, email, birthDate } = user;

    this.id = id;
    this.name = name;
    this.email = email;
    this.birthDate = birthDate;
  }
}
