import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { VacancyWithCompany } from '../vacancyWithCompany';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-all-vacancies',
  templateUrl: './all-vacancies.component.html',
  styleUrls: ['./all-vacancies.component.scss']
})
export class AllVacanciesComponent implements OnInit {

  Vacancies$: Observable<VacancyWithCompany[]> = new Observable<VacancyWithCompany[]>();

  term: string = "";
  AlreadySorted: boolean = false;
  sortOrder: string = "";

  constructor(private VacancyService: VacancyService) { }

  ngOnInit(): void {
    this.Vacancies$ = this.VacancyService.getVacancies();
  }


  sortVacancies() {

    if (this.AlreadySorted) {
      this.AlreadySorted = false;
      this.Vacancies$ = this.Vacancies$.pipe(map((Vacancies: any[]) => {
        Vacancies.sort((a, b) => {
          return a.expirationDate > b.expirationDate ? 1 : -1;
        });
        this.sortOrder = "↑"
        return Vacancies;
      }))
    }
    else {
      this.AlreadySorted = true;
      this.Vacancies$ = this.Vacancies$.pipe(map((Vacancies: any[]) => {
        Vacancies.sort((a, b) => {
          return a.expirationDate > b.expirationDate ? -1 : 1;
        });
        this.sortOrder = "↓"
        return Vacancies;
      }))
    }
  }
}

