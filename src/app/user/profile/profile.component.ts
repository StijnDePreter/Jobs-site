import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  
  user: User = {
    id: 0,
    email: "",
    userName: "",
    phone: "",
    address: "",
    city: "",
    linkedin: "",
  };

  
  users$: Subscription = new Subscription();

  errorMessage: "" = '';

  constructor(private UserService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.users$ = this.UserService.getUser().subscribe(result => this.user = result);
  }
  edit() {
    this.router.navigate(['/userprofile/edit']);
  }


}

