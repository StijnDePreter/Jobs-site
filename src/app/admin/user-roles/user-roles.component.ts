import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { AdminService } from '../admin.service';
import { UserRole } from 'src/app/security/userRole';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {

  users: User[] = [];
  changingUser: User =
    {
      id: 0,
      email: "",
      userName: "",
      userRoleId: 0,
      userRole: { id: 0, name: "" }
    }
  newUserRoleId : number = 0;

  userRoles: UserRole[] = [];
  users$: Subscription = new Subscription();
  putUser$: Subscription = new Subscription();
  userRoles$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private AdminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
    this.getUserRoles();
  }

  getUsers() {
    this.users$ = this.AdminService.getAllUsers().subscribe(result => this.users = result);
  }

  getUserRoles() {
    this.userRoles$ = this.AdminService.getUserRoles().subscribe(result => this.userRoles = result);
  }

  onChange(event: any, userId: number, index:number): void {
    this.changingUser = this.users.find(u => u.id === userId) ?? this.changingUser;
    this.newUserRoleId = Object.values(event.target.value)[3] as number;
    
    this.changingUser.userRoleId = this.newUserRoleId;

    if (this.changingUser.id > 0) {
      this.putUser$ = this.AdminService.putUser(this.changingUser).subscribe(result => {
        this.getUsers();
      },
        error => {
          this.errorMessage = error.message;
        }
      );
    }


  }


}
