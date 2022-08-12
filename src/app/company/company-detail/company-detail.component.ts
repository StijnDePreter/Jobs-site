import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {


  errorMessage: string = '';
  deleteCompanie$: Subscription = new Subscription();

  company: Company = {
    id: 0,
    name: "",
    description: "",
    picture: ""
  };

  constructor(private companyService: CompanyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    if (companyId != null) {
      this.companyService.getCompanyById(+companyId).subscribe(result => this.company = result);
    }
  }

  edit(id: number): void {
    this.router.navigate(['companyform'], { state: { id: id, mode: 'edit' } });

  }

  delete(id: number) {
    this.deleteCompanie$ = this.companyService.deleteCompany(id).subscribe(result => {
      alert("The company " + this.company.name + " has been deleted");
      this.router.navigate(["mycompanies"]);
    }, error => {

      this.errorMessage = error.message;
    });
  }

  addVacancy() {
    this.router.navigate(['vacancyform'], { state: {companyId: this.company.id, mode: 'add' } });
  }

}
