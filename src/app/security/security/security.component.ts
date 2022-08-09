import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    token: '',
    userRole: {id:0,name:""}
  };

  passwordCheck: string ="";

  isSubmitted: boolean = false;
  errorMessage: string = '';

  isLogin: boolean = false;
  isRegister: boolean = false;
  isLogout: boolean = false;
  title: string = "Login";

  constructor(private authService: AuthService, private router: Router) {

  }
  ngOnInit(): void {
    switch (this.router.url) {
      case '/login': {
        this.isLogin = true;
        this.title = "Login";
        break;
      }
      case '/logout': {
        this.isLogout = true;
        this.authService.deleteToken();
        this.router.navigate(['']);
        break;
      }
      case '/register': {
        this.isRegister = true;
        this.title = "Register new Account"
        break;
      }
      default: {
        this.isLogin = true;
        break;
      }
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.isLogin) {
      this.Login();
      // this.authService.authenticate(this.user).subscribe(result => {
      //   this.errorMessage = '';
      //   // save access token localstorage
      //   localStorage.setItem('token', result.token);

      //   localStorage.setItem('id', result.id.toString());
      //   localStorage.setItem('email', result.email);
      //   localStorage.setItem('userRole', result.userRole.name);
      //   this.router.navigate(['']);
      // }, error => {
      //   this.errorMessage = 'Email/password not correct!';
      //   this.isSubmitted = false;
      // });
    } 



    if (this.isRegister) {
      if (this.passwordCheck == this.user.password) {
        this.isSubmitted = true;
        this.authService.register(this.user).subscribe(result => {
          this.errorMessage = '';
          // // save access token localstorage
          // localStorage.setItem('token', result.token);
  
          // localStorage.setItem('id', result.id.toString());
          // localStorage.setItem('email', result.email);
          // localStorage.setItem('userRole', result.userRole.name);
          this.Login();
        }, error => {
          this.errorMessage = error.error.message;
          this.isSubmitted = false;
        });
      } else {
        this.errorMessage = "The password check failed";
        this.isSubmitted = false;
      }
    } 
  }

  Login(): void {
    this.authService.authenticate(this.user).subscribe(result => {
      this.errorMessage = '' + 'login error';
      console.log("login");
      console.log(result);

      
      // save access token localstorage
      localStorage.setItem('token', result.token);

      localStorage.setItem('id', result.id.toString());
      localStorage.setItem('email', result.email);
      localStorage.setItem('userRole', result.userRole.name);
      this.router.navigate(['']);
    }, error => {
      this.errorMessage = 'Email/password not correct!';
      this.isSubmitted = false;
    });
  }
}