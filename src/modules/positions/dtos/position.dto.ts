export class PositionDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly companyLogo: string,
    public readonly companyName: string,
    public readonly fitness: number,
    public readonly requiredCompetencies: string[],
    public readonly optionalCompetencies: string[],
  ) {}
}
