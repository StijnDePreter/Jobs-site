import { User } from "../security/user";
import { Vacancy } from "../vacancies/vacancy";

export interface Application {
    id:number;
    userId:number;
    user:User;
    vacencyId: number;
    // vacancy:Vacancy;
    motivation:string;
}