import { Injectable } from '@angular/core';
import { VacancyWithCompany } from './vacancyWithCompany';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationWithUser } from './application';
import { Application } from '../applications/application';
import { Vacancy } from '../company/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private httpClient: HttpClient) {
  }

  getVacancies(): Observable<VacancyWithCompany[]> {
    return this.httpClient.get<VacancyWithCompany[]>("https://localhost:44359/api/Vacancies");
  }

  getVacancyById(id: number): Observable<VacancyWithCompany> {
    return this.httpClient.get<VacancyWithCompany>("https://localhost:44359/api/Vacancies/" + id);
  }

  getMyApplication(vacancyId: number): Observable<Application> {
    return this.httpClient.get<Application>("https://localhost:44359/api/Applications/MyApplication/" + vacancyId);
  }

  deleteApplication(applicationId: number): Observable<Application> {
    return this.httpClient.delete<Application>("https://localhost:44359/api/Applications/" + applicationId);
  }

  getVacancyApplications(vacancyId: number): Observable<ApplicationWithUser[]> {
    return this.httpClient.get<ApplicationWithUser[]>("https://localhost:44359/api/Applications/ApplicationByVacancy/" + vacancyId);
  }

  postVacancy(vacancy: Vacancy): Observable<Vacancy> {
    return this.httpClient.post<Vacancy>("https://localhost:44359/api/Vacancies", vacancy);
  }

  putVacancy(id: number, vacancy: Vacancy): Observable<Vacancy> {
    return this.httpClient.put<Vacancy>("https://localhost:44359/api/Vacancies/" + id, vacancy);
  }


}
