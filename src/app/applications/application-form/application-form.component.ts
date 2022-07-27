import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Application } from '../application';
import { ApplicationsService } from '../applications.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit, OnDestroy {
  isAdd: boolean = false;
  isEdit: boolean = false;
  applicationId: number = 0;

  application: Application = {
    id: 0,
    userId: 0,
    user:
    {
      id: 0,
      email: "",
      password: "",
      token: "",
      userRole: {id:0,name:""},
    },
    vacencyId: 0,
    // vacancy:Vacancy;
    motivation: ""
  };

  isSubmitted: boolean = false;
  errorMessage: string = "";

  application$: Subscription = new Subscription();
  postApplication$: Subscription = new Subscription();
  putApplication$: Subscription = new Subscription();

  constructor(private router: Router, private applicationService: ApplicationsService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.applicationId = +this.router.getCurrentNavigation()?.extras.state?.id;

    console.log("constructor works")

    if (this.applicationId != null && this.applicationId > 0) {
      this.application$ = this.applicationService.getApplicationById(this.applicationId).subscribe(result => this.application = result);
    }

  }

  ngOnInit(): void {
    console.log("onInit works")
  }

  ngOnDestroy(): void {
    this.application$.unsubscribe();
    this.postApplication$.unsubscribe();
    this.putApplication$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postApplication$ = this.applicationService.postApplication(this.application).subscribe(result => {
        //all went well --> aan te passen
        this.router.navigateByUrl("/admin/application");
      },
        error => {
          this.errorMessage = error.message;
        });
    }
    if (this.isEdit) {
      this.putApplication$ = this.applicationService.putApplication(this.applicationId, this.application).subscribe(result => {
        //all went well--> aan te passen
        this.router.navigateByUrl("/admin/application");
      },
        error => {
          this.errorMessage = error.message;
        });
    }
  }

}
