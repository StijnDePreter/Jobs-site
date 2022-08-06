import { User } from "../security/user";
import { Vacancy } from "../vacancies/vacancy";

export interface Application {
    id: number;
    userId:number;
    vacencyId: number;
    motivation:string;
}