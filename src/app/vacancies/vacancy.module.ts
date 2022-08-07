import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyComponent } from './vacancy/vacancy.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';
// import { AllVacanciesComponent } from './all-vacancies/all-vacancies.component';
import { VacancyService } from './vacancy.service';
import { AllVacanciesComponent } from './all-vacancies/all-vacancies.component';
import { FilterListPipe } from './filter-list.pipe';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VacancyApplicationsComponent } from './vacancy-applications/vacancy-applications.component';
import { VacancyFormComponent } from './vacancy-form/vacancy-form.component';



// @NgModule({
//   declarations: [
//     VacancyComponent
//   ],
//   imports: [
//     CommonModule
//   ]
// })
// export class VacancyModule { }

@NgModule({
  declarations: [
    AllVacanciesComponent,
    VacancyComponent,
    VacancyDetailComponent,
    FilterListPipe,
    VacancyApplicationsComponent,
    VacancyFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    AllVacanciesComponent,
    VacancyComponent,
    VacancyDetailComponent,
    FilterListPipe
  ],
  providers: [
    VacancyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class VacanciesModule { }
