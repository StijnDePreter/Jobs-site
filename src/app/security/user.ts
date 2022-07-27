import { UserRole } from "./userRole";

export interface User {
    id: number;
    email: string;
    password: string;
    token: string;
    userRole : UserRole;
  }