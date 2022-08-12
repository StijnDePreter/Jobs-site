import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Application } from 'src/app/applications/application';
import { ApplicationWithUser } from '../application';
import { VacancyWithCompany } from '../vacancyWithCompany';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.scss']
})
export class VacancyDetailComponent implements OnInit {

  applied: boolean =false;

  vacancy: VacancyWithCompany = {
    id: 0,
    title: "",
    expirationDate: "",
    description: "",
    profile: "",
    offer: "",
    wayToApply: "",
    companyId: 0,
    company: {id: 0,name: "", description: "",picture: ""}
  }

  myApplication: Application | null = null;
  // {
  //   userId: 0,
  //   vacencyId: 0,
  //   motivation: ""
  // };

  vacancy$: Subscription = new Subscription();
  application$: Subscription = new Subscription();
  deleteApplication$: Subscription = new Subscription();
  errorMessage: any;

  applications: ApplicationWithUser[] = [];

  constructor(private vacancyService: VacancyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const vacancyId = this.route.snapshot.paramMap.get('id');
    if (vacancyId != null) {
      this.vacancy$ = this.vacancyService.getVacancyById(+vacancyId).subscribe(result => this.vacancy = result);
      this.application$ =this.vacancyService.getMyApplication(+vacancyId).subscribe(result => this.myApplication = result);
      
      this.vacancyService.getVacancyApplications(+vacancyId).subscribe(result => this.applications = result);
      
      
      
    }


  }

  applyForVacancy(id: number) {
    this.router.navigate(['/applyforvacancy', id]);
  }

  deleteApplication() {

    if (this.myApplication != null){
      this.deleteApplication$ = this.vacancyService.deleteApplication(this.myApplication.id).subscribe(result => {
      this.application$ =this.vacancyService.getMyApplication(this.vacancy.id).subscribe(result => this.myApplication = result);
    }, error => {

      this.errorMessage = error.message;
    });

    }
    
  }


  

}
