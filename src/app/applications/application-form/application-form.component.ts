import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VacancyWithCompany } from 'src/app/vacancies/vacancyWithCompany';
import { Application } from '../application';
import { ApplicationsService } from '../applications.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit, OnDestroy {

  // vacancyId: number = 0;

  vacancy: VacancyWithCompany = {
    id: 0,
    title: "",
    expirationDate: "",
    description: "",
    profile: "",
    offer: "",
    wayToApply: "",
    companyId: 0,
    company: { id: 0, name: "", description: "", picture: "" },
  };

  applicationForm = new FormGroup({
    motivation: new FormControl('')
  });

  application: Application = {
    id: 0,
    userId: 0,
    vacencyId: 0,
    motivation: ""
  };

  isSubmitted: boolean = false;
  errorMessage: string = "";

  vacancy$: Subscription = new Subscription();
  postApplication$: Subscription = new Subscription();

  constructor(private router: Router, private route: ActivatedRoute, private applicationService: ApplicationsService) {
  }

  ngOnInit(): void {
    const vacancyId = this.route.snapshot.paramMap.get('id')

    if (vacancyId != null) {
      this.vacancy$ = this.applicationService.getVacancyById(+vacancyId).subscribe(result => this.vacancy = result);
    }


  }

  ngOnDestroy(): void {
    this.vacancy$.unsubscribe();
    this.postApplication$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    this.application.motivation = this.applicationForm.value.motivation;
    this.application.vacencyId = this.vacancy.id;
    this.postApplication$ = this.applicationService.postApplication(this.application).subscribe(result => {
      this.router.navigateByUrl("/vacancy/" + this.vacancy.id);
    },
      error => {
        this.errorMessage = error.message;
      });
  }

}
