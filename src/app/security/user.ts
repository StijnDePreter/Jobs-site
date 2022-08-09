import { UserRole } from "./userRole";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    userName: string
    email: string;
    password: string;
    token: string;
    userRole : UserRole;
  }