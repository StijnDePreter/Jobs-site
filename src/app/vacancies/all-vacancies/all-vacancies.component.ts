import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Vacancy } from '../vacancy';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-all-vacancies',
  templateUrl: './all-vacancies.component.html',
  styleUrls: ['./all-vacancies.component.scss']
})
export class AllVacanciesComponent implements OnInit {

  Vacancies$: Observable<Vacancy[]> = new Observable<Vacancy[]>();

  term: string = ""

  AlreadySorted: boolean = false

  constructor(private VacancyService: VacancyService) { }

  ngOnInit(): void {
    this.Vacancies$ = this.VacancyService.getVacancies();
  }


  sortVacancies() {
    console.log(this.AlreadySorted);

    if (this.AlreadySorted) {
      this.AlreadySorted = false;
      this.Vacancies$ = this.Vacancies$.pipe(map((Vacancies: any[]) => {
        Vacancies.sort((a, b) => {
          return a.expirationDate > b.expirationDate ? 1 : -1;
          //functie gevonden op het internet: nog uit te zoeken hoe dit werkt!
        });
        return Vacancies;
      }))
    }
    else {
      this.AlreadySorted = true;
      this.Vacancies$ = this.Vacancies$.pipe(map((Vacancies: any[]) => {
        Vacancies.sort((a, b) => {
          return a.expirationDate > b.expirationDate ? -1 : 1;
          //functie gevonden op het internet: nog uit te zoeken hoe dit werkt!
        });
        return Vacancies;
      }))
    }
  }
}

