import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CompanyService } from '../company.service';
import { Vacancy } from '../vacancy';

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.scss']
})
export class CompanyVacanciesComponent implements OnInit {

  Vacancies: Vacancy[] = [];

  constructor(private CompanyService: CompanyService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    if (companyId != null) {
      this.CompanyService.getCompanyVacancies(+companyId).subscribe(result => this.Vacancies = result);
    }
  }

  edit(id: number): void {
    this.router.navigate(['vacancyform'], { state: { id: id, mode: 'edit' } });
  }


}


