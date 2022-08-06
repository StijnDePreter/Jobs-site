import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacancy } from '../vacancy';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.scss']
})
export class VacancyDetailComponent implements OnInit {
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

  constructor(private vacancyService: VacancyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const vacancyId = this.route.snapshot.paramMap.get('id');
    //console.log(this.route.snapshot.paramMap.get('test'));
    if (vacancyId != null) {
      this.vacancyService.getVacancyById(+vacancyId).subscribe(result => this.vacancy = result);
      console.log(vacancyId);
    }
  }

  

  applyForVacancy(id: number) {
    console.log(id)
    this.router.navigate(['/applyforvacancy', id]);
  }

  

}
