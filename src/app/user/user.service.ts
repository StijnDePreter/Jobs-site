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


//   getUsers(): Observable<User[]> {
//     return this.httpClient.get<User[]>("http://localhost:44359/api/UsersAdministration");
//   }

  getUser(): Observable<User> {
    return this.httpClient.get<User>("https://localhost:44359/api/UsersAdministartion");
  }

  postUser(User: User): Observable<User> {
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<User>("https://localhost:44359/api/UsersAdministration", User);
  }

  putUser(User: User): Observable<User> {
    
    return this.httpClient.put<User>("https://localhost:44359/api/UsersAdministartion", User);
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>("https://localhost:44359/api/UsersAdministration/" + id);
  }
}
