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
import { FormsModule } from '@angular/forms';



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
    FilterListPipe
  ],
  imports: [
    FormsModule,
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
