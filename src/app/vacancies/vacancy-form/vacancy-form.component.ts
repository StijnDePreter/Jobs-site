import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Vacancy } from 'src/app/company/vacancy';
import { VacancyService } from '../vacancy.service';


@Component({
  selector: 'app-vacancy-form',
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.scss']
})
export class VacancyFormComponent implements OnInit, OnDestroy {

  isAdd: boolean = false;
  isEdit: boolean = false;

  vacancyId: number = 0;

  companyId: number = 0;


  vacancy: Vacancy = {
    id: 0,
    title: '',
    expirationDate: new Date(),
    description: '',
    profile: '',
    offer: '',
    wayToApply: '',
    companyId: 0
  };

  isSubmitted: boolean = false;
  errorMessage: string = "";

  postVacancy$: Subscription = new Subscription();
  putVacancy$: Subscription = new Subscription();
  vacancy$: Subscription = new Subscription();

  // reactive form
  vacancyForm = new FormGroup({
    title: new FormControl(''),
    expirationDate: new FormControl(''),
    description: new FormControl(''),
    profile: new FormControl(''),
    offer: new FormControl(''),
    wayToApply: new FormControl(''),
 
  });
  

  constructor(private router: Router, private vacancyService: VacancyService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.vacancyId = +this.router.getCurrentNavigation()?.extras.state?.id;
    this.companyId = +this.router.getCurrentNavigation()?.extras.state?.companyId;

    // this.vacancy.companyId = this.companyId

    if (this.vacancyId != null && this.vacancyId > 0) {
      this.vacancy$ = this.vacancyService.getVacancyById(this.vacancyId).subscribe(result => {
        this.vacancyForm.setValue({
          title: result.title,
          expirationDate: result.expirationDate,
          description: result.description,
          profile: result.profile,
          offer: result.offer,
          wayToApply: result.wayToApply
        });
      });
    }

  }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    this.vacancy$.unsubscribe();
    this.postVacancy$.unsubscribe();
    this.putVacancy$.unsubscribe();
  }

  submitData() {

    this.vacancy = this.vacancyForm.value;
    
    if (this.isAdd) {
      this.vacancy.companyId = this.companyId

      this.postVacancy$ = this.vacancyService.postVacancy(this.vacancy).subscribe(result => {

        this.router.navigateByUrl("/mycompanies");
      },
        error => {
          this.errorMessage = error.message;
        });
    }
    if (this.isEdit) {
      this.putVacancy$ = this.vacancyService.putVacancy(this.vacancyId, this.vacancy).subscribe(result => {

        this.router.navigateByUrl("/mycompanies");
      },
        error => {
          this.errorMessage = error.message;
        });
    }
  }

}
