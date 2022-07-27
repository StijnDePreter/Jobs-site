// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-company',
//   templateUrl: './company.component.html',
//   styleUrls: ['./company.component.scss']
// })
// export class CompanyComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Company',
  templateUrl: './Company.component.html',
  styleUrls: ['./Company.component.scss']
})
export class CompanyComponent implements OnInit {
  @Input() company: Company = {
    id: 0,
    name: "",
    description: "",
    picture: ""
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  detail(id: number) {
    this.router.navigate(['/company', id]);
  }
}