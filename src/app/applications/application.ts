import { User } from "../security/user";
import { Vacancy } from "../vacancies/vacancy";

export interface Application {
    userId:number;
    vacencyId: number;
    motivation:string;
}