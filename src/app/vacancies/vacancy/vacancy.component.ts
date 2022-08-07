// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-vacancy',
//   templateUrl: './vacancy.component.html',
//   styleUrls: ['./vacancy.component.scss']
// })
// export class VacancyComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, Input, OnInit } from '@angular/core';
import { VacancyWithCompany } from '../vacancyWithCompany';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Vacancy',
  templateUrl: './Vacancy.component.html',
  styleUrls: ['./Vacancy.component.scss']
})
export class VacancyComponent implements OnInit {
    @Input() Vacancy: VacancyWithCompany = {
    id: 0,
    title: "",
    expirationDate: "",
    description: "",
    profile: "",
    offer: "",
    wayToApply: "",
    companyId: 0,
    company: {id: 0,name: "", description: "",picture: ""},
};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  detail(id: number) {
    this.router.navigate(['/vacancy', id]);
  }
}
