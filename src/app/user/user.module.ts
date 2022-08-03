import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { UsersService } from './user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProfileComponent,
    ProfileFormComponent
  ],
  providers: [
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ],
  exports: [
    ProfileComponent,
    ProfileFormComponent    
  ]
})
export class UserModule { }
