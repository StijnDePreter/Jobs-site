import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCompaniesComponent } from './my-companies/my-companies.component';
import { CompanyComponent } from './company/company.component';
import { CompanyService } from './company.service';
import { SecurityInterceptor } from '../security/security.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';



@NgModule({
  declarations: [
    MyCompaniesComponent,
    CompanyComponent,
    CompanyDetailComponent,
    CompanyFormComponent,
    CompanyVacanciesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MyCompaniesComponent,
    CompanyComponent
  ],
  providers: [
    CompanyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class CompanyModule { }
