import {User} from './user';
import { UserRole } from './userRole';

export interface UserResponse {
  // accessToken: string;
  token: string;
  id: number;
  email: string;
  user: User;
  userRole: UserRole;
}