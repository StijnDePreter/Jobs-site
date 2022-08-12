import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.httpClient.get<Vacancy[]>("https://localhost:44359/api/Vacancies/CompanyVacancies/" + id);
  }


  constructor(private httpClient: HttpClient) {
  }



  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>("https://localhost:44359/api/Companies");
  }

  getCompanyById(id: number): Observable<Company> {
    return this.httpClient.get<Company>("https://localhost:44359/api/Companies/" + id);
  }

  deleteCompany(id: number) {
    return this.httpClient.delete<Company>("https://localhost:44359/api/Companies/" + id);
  }

  postCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>("https://localhost:44359/api/Companies/", company);
  }

  putCompany(id: number, company: Company): Observable<Company> {
    return this.httpClient.put<Company>("https://localhost:44359/api/Companies/" + id, company);
  }



}
