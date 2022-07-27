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
  // deleteCompanie$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private CompanyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    // this.companies = this.CompanyService.getCompanies();
    this.getCompanies();
  }

  // add en delete toevoegen.
  add() {
    //Navigate to form in add mode
    this.router.navigate(['companyform'], {state: {mode: 'add'}});
  }

  // delete(id: number) {
  //   this.deleteCompanie$ = this.CompanyService.deleteCompany(id).subscribe(result => {
  //     //all went well
  //     this.getCompanies();
  //   }, error => {
  //     //error
  //     this.errorMessage = error.message;
  //   });
  // }

  getCompanies() {
    this.companies$ = this.CompanyService.getCompanies().subscribe(result => this.companies = result);
  }


  // sortCompanies() {
  //   console.log(this.AlreadySorted);

  //   if (this.AlreadySorted) {
  //     this.AlreadySorted = false;
  //     this.Companies$ = this.Companies$.pipe(map((Companies: any[]) => {
  //       Companies.sort((a, b) => {
  //         return a.expirationDate > b.expirationDate ? 1 : -1;
  //         //functie gevonden op het internet: nog uit te zoeken hoe dit werkt!
  //       });
  //       return Companies;
  //     }))
  //   }
  //   else {
  //     this.AlreadySorted = true;
  //     this.Companies$ = this.Companies$.pipe(map((Companies: any[]) => {
  //       Companies.sort((a, b) => {
  //         return a.expirationDate > b.expirationDate ? -1 : 1;
  //         //functie gevonden op het internet: nog uit te zoeken hoe dit werkt!
  //       });
  //       return Companies;
  //     }))
  //   }
  // }
}