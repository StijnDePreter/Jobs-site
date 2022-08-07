import { User } from "../user/user";

export interface ApplicationWithUser {
    id: number;
    userId:number;
    vacencyId: number;
    motivation:string;
    user: User;
}