import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Company } from '../company';
import { CompanyService } from '../company.service';


@Component({
  selector: 'app-my-companies',
  templateUrl: './my-companies.component.html',
  styleUrls: ['./my-companies.component.scss']
})
export class MyCompaniesComponent implements OnInit {

  companies: Company[] = [];
  companies$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private CompanyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  add() {
    this.router.navigate(['companyform'], {state: {mode: 'add'}});
  }

  getCompanies() {
    this.companies$ = this.CompanyService.getCompanies().subscribe(result => this.companies = result);
  }

}