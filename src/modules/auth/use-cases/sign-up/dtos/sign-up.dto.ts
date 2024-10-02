export class SignUpDto {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly birthDate: Date,
  ) {}
}
