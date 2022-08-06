import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Application } from 'src/app/applications/application';
import { Vacancy } from '../vacancy';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.scss']
})
export class VacancyDetailComponent implements OnInit {

  applied: boolean =false;

  vacancy: Vacancy = {
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

  constructor(private vacancyService: VacancyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const vacancyId = this.route.snapshot.paramMap.get('id');
    //console.log(this.route.snapshot.paramMap.get('test'));
    if (vacancyId != null) {
      this.vacancy$ = this.vacancyService.getVacancyById(+vacancyId).subscribe(result => this.vacancy = result);
      this.application$ =this.vacancyService.getMyApplication(+vacancyId).subscribe(result => this.myApplication = result);
      
      // console.log(this.myApplication);

      // if (this.myApplication.motivation != ""){
      //   this.applied = true;
      //   console.log("alreay applied")
      // }
      
    }


  }

  applyForVacancy(id: number) {
    console.log(this.myApplication)
    this.router.navigate(['/applyforvacancy', id]);
  }

  deleteApplication() {
    console.log("delete")
    // console.log(this.myApplication.motivation)

    if (this.myApplication != null){
      this.deleteApplication$ = this.vacancyService.deleteApplication(this.myApplication.id).subscribe(result => {
      console.log('deleete successfully')
      this.application$ =this.vacancyService.getMyApplication(this.vacancy.id).subscribe(result => this.myApplication = result);
    }, error => {
      //error
      console.log('deleete failed')
      this.errorMessage = error.message;
    });

    }
    
  }


  

}
