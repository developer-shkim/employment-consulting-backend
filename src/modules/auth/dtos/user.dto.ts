export class UserDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly birthDate: string,
  ) {}
}
