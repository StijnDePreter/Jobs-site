import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }


  getUser(): Observable<User> {
    return this.httpClient.get<User>("https://localhost:44359/api/UsersAdministartion");
  }

  postUser(User: User): Observable<User> {


    return this.httpClient.post<User>("https://localhost:44359/api/UsersAdministration", User);
  }

  putUser(User: User): Observable<User> {
    
    return this.httpClient.put<User>("https://localhost:44359/api/UsersAdministartion", User);
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>("https://localhost:44359/api/UsersAdministration/" + id);
  }
}
