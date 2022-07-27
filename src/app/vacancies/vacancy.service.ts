import { Injectable } from '@angular/core';
import { Vacancy } from './vacancy';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private httpClient: HttpClient) {
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.httpClient.get<Vacancy[]>("https://localhost:44359/api/Vacancies");
  }

  getVacancyById(id: number): Observable<Vacancy> {
    return this.httpClient.get<Vacancy>("https://localhost:44359/api/Vacancies/" + id);
  }


}
