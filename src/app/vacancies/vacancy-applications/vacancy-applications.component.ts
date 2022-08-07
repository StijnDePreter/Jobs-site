import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationWithUser } from '../application';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy-applications',
  templateUrl: './vacancy-applications.component.html',
  styleUrls: ['./vacancy-applications.component.scss']
})
export class VacancyApplicationsComponent implements OnInit {

  @Input() application: ApplicationWithUser = {
    id: 0,
    userId: 0,
    user:
    {
      id: 0,
      email: "",
      userName: "",
      phone: "",
      address: "",
      city: "",
      linkedin: "",
    },
    vacencyId: 0,
    motivation: ""
  };
  constructor(private vacancyService: VacancyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


}
