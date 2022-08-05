import { UserRole } from "../security/userRole";

export interface User {
    id: number;
    email: string;
    userName: string;
    userRoleId: number;
    userRole: UserRole;
}