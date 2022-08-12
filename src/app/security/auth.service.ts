import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { UserResponse } from './userResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }


  deleteToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  authenticate(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>('https://localhost:44359/api/Users/authenticate', user);
  }

  register(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>('https://localhost:44359/api/Users/register', user);
  }


  isAdmin(): boolean {
    let adminRole: string = "SuperAdmin"
    return adminRole == (localStorage.getItem('userRole')) ;
  }

  isAdminOrCompanyAdmin(): boolean {
    let listOfAdmins: Array<string|null>;
    listOfAdmins =
      [
        "SuperAdmin",
        "CompanyAdmin"
      ];
    return listOfAdmins.includes(localStorage.getItem('userRole')) ;
  }
}