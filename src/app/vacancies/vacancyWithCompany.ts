import { Company } from "../company/company";

export interface VacancyWithCompany {
    id: number;
    title: string;
    expirationDate: string;
    description: string;
    profile: string;
    offer: string;
    wayToApply: string;
    companyId: number;
    company: Company;
}
