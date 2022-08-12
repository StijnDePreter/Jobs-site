import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VacancyWithCompany } from '../vacancies/vacancyWithCompany';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor(private httpClient: HttpClient) {
  }

  getVacancyById(id: number): Observable<VacancyWithCompany> {
    return this.httpClient.get<VacancyWithCompany>("https://localhost:44359/api/Vacancies/" + id);
  }

  postApplication(Application: Application): Observable<Application> {
    return this.httpClient.post<Application>("https://localhost:44359/api/Applications", Application);
  }

}
