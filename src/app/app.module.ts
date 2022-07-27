import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecurityModule } from './security/security.module';

import { VacanciesModule } from './vacancies/vacancy.module';
import { ApplicationsModule } from './applications/applications.module';
import { CompanyModule } from './company/company.module';

import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    //AllVacanciesComponent,
    //VacancyComponent,
    //FilterListPipe,
    // VacancyDetailComponent,
    //ApplicationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SecurityModule,
    VacanciesModule,
    ApplicationsModule,
    CompanyModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@Injectable({
  providedIn: 'root'
})


export class AppModule { }
