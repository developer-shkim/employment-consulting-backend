export class SignInDto {
  constructor(
    public readonly email: string,
    public readonly password: string,
  ) {}
}
