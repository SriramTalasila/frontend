import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: any =  {};
  errMssg = '';

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.loginUserData);
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.success.token);
          localStorage.setItem('role', res.success.role);
          if (res.success.role === 'Admin') {
            this.router.navigate(['/admin']);
          }
          if (res.success.role === 'student') {
            this.router.navigate(['/student']);
          }
          if (res.success.role === 'Staff') {
            this.router.navigate(['/staff']);
          }
        },
        err => {
          console.log(err);
          console.log(err.error.error.message);
          this.errMssg = err.error.error.message;
        }
      );
  }
}

