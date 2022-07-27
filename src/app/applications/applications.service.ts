import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor(private httpClient: HttpClient) {
    console.log('Applicationservice werkt');
  }

  // getApplications(): Observable<Application[]> {
  //   return this.httpClient.get<Application[]>("https://localhost:44359/api/Applications");
  // }

  // getApplicationById(id: number): Observable<Application> {
  //   return this.httpClient.get<Application>("https://localhost:44359/api/Applications/" + id);
  // }

  getApplications(): Observable<Application[]> {
    return this.httpClient.get<Application[]>("http://localhost:44359/Applications");
  }

  getApplicationById(id: number): Observable<Application> {
    return this.httpClient.get<Application>("http://localhost:44359/Applications/" + id);
  }

  postApplication(Application: Application): Observable<Application> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Application>("http://localhost:44359/Applications", Application, { headers: headers });
  }

  putApplication(id: number, Application: Application): Observable<Application> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Application>("http://localhost:44359/Applications/" + id, Application, { headers: headers });
  }

  deleteApplication(id: number): Observable<Application> {
    return this.httpClient.delete<Application>("http://localhost:44359/Applications/" + id);
  }
}
