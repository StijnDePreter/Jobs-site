import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from '../admin.service';
import { Company } from '../company';
import { User } from '../user';

@Component({
  selector: 'app-company-admins',
  templateUrl: './company-admins.component.html',
  styleUrls: ['./company-admins.component.scss']
})
export class CompanyAdminsComponent implements OnInit {



  users: User[] = [];
  companies: Company[] = [];

  companies$: Subscription = new Subscription();
  users$: Subscription = new Subscription();
  putCompany$: Subscription = new Subscription();

  errorMessage: string = '';
  changingCompany: Company = {
    id: 0,
    name: "",
    userId: 0
  }
  newUserId: number = 0;

  constructor(private AdminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCompanyAdmins();
    this.getCompanies();
  }

  getAllCompanyAdmins() {
    this.users$ = this.AdminService.getAllCompanyAdmins().subscribe(result => this.users = result);
  }

  getCompanies() {
    this.users$ = this.AdminService.getCompanies().subscribe(result => this.companies = result);
  }

  onChange(event: any, index: number) {
    this.changingCompany = this.companies[index];
    this.newUserId = Object.values(event.target.value)[3] as number;

    this.changingCompany.userId = this.newUserId;

    if (this.changingCompany.id > 0) {
      this.putCompany$ = this.AdminService.putCompany(this.changingCompany.id, this.changingCompany).subscribe(result => {
        this.getCompanies();
      },
        error => {
          this.errorMessage = error.message;
        }
      );
    }

  }


}
