import { Company } from '@entities/company.entity';

type CompanyDtoProps = {
  name: string;
  logo: string;
  businessCategory: string;
  id?: string;
};

export class CompanyDto {
  public readonly name: string;
  public readonly logo: string;
  public readonly businessCategory: string;
  public readonly id?: string;

  constructor(props: CompanyDtoProps) {
    const { name, logo, businessCategory, id } = props;

    this.name = name;
    this.logo = logo;
    this.businessCategory = businessCategory;
    this.id = id;
  }

  public static create(company: Company) {
    return new CompanyDto(company);
  }
}
