import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit, OnDestroy {
  userId: number = 0;
  isSubmitted: boolean = false;
  errorMessage: string = '';

  
  user$: Subscription = new Subscription();
  putUser$: Subscription = new Subscription();

  userForm = new FormGroup({
    userName: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    linkedin: new FormControl('')
  });


  constructor(private router: Router, private userService: UsersService) {

    this.userId = parseInt(localStorage.getItem('id') ?? '0')

    if (this.userId != null && this.userId > 0) {
      this.user$ = this.userService.getUser().subscribe(result => {
        this.userForm.setValue({
          // id : this.userId,
          userName: result.userName,
          phone: result.phone,
          address: result.address,
          city: result.city,
          linkedin: result.linkedin
        });
      });
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;

    this.putUser$ = this.userService.putUser(this.userForm.value).subscribe(result => {
      //all went well
      this.router.navigateByUrl("/userprofile");
    },
      error => {
        this.errorMessage = error.message;
      }
    );

  }


  ngOnDestroy(): void {
    this.user$.unsubscribe();
    this.putUser$.unsubscribe();
  }

  ngOnInit(): void {
  }

}
