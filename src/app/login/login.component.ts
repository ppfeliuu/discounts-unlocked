import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  canAccess: any;

  loading = false;

  keysMemberId = '';


  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    if (localStorage.getItem('kid')) {
      this.keysMemberId = localStorage.getItem('kid');
      this.login(localStorage.getItem('kid'));
    }
  }

  login(id: any) {

    this.loading = true;

    const isAuth = this.authService.isMember(id);

    isAuth.subscribe(res => {
    this.canAccess = res;
    // console.log(this.canAccess);
    },
      error => {
        this.snackBar.open('Can not access, please try again', '', { duration: 5000 });
        this.loading = false;
       },
      () => {
        // console.log(this.canAccess[0])
        if (this.canAccess[0] === 'True') {
          this.authService.user = id;
          localStorage.setItem('kid', id);
          this.loading = false;
          this.router.navigate(['/home']);
        } else {
          this.snackBar.open('The user is invalid, please try again.', '', { duration: 5000 });
          this.loading = false;
        }
      }
    );
  }

}
