import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRole } from '../security/userRole';
import { Company } from './company';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("https://localhost:44359/api/UsersAdministartion/AllUsers");
  }

  getUserRoles(): Observable<UserRole[]> {
    return this.httpClient.get<UserRole[]>("https://localhost:44359/api/UserRoles");
  }
  

  deleteUser(id: number) {
    return this.httpClient.delete<User>("https://localhost:44359/api/UsersAdministartion/" + id);
  }

  putUser(user: User): Observable<User> {
    console.log(user);
    return this.httpClient.put<User>("https://localhost:44359/api/UsersAdministartion/UserRole", user);
  }

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>("https://localhost:44359/api/Companies");
  }

  getAllCompanyAdmins(): Observable<User[]> {
    return this.httpClient.get<User[]>("https://localhost:44359/api/UsersAdministartion/AllCompanyAdmins");
  }

  putCompany(id: number, company: Company): Observable<Company> {
    console.log(id, company);
    return this.httpClient.put<Company>("https://localhost:44359/api/Companies/" + id, company);
  }

}