import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { CompanyAdminsComponent } from './company-admins/company-admins.component';
import { CompanyService } from '../company/company.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';
import { AdminService } from './admin.service';



@NgModule({
  declarations: [
    UserRolesComponent,
    CompanyAdminsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    UserRolesComponent,
    CompanyAdminsComponent
  ],
  providers: [
    AdminService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class AdminModule { }
