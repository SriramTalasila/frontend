import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private httpClient: HttpClient, private auth: AuthService) {
  }

  hostels;
  colleges;
  temp;
  student: any = {};
  succMssg = '';
  errMssg = '';

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/other/gethostels').subscribe((res) => {
      // console.log(res);
      this.hostels = res;
    });
    this.httpClient.get('http://localhost:3000/other/getcolleges').subscribe((res) => {
      // console.log(res);
      this.colleges = res;
    });
  }

  registerStudent() {
    console.log(this.student);
    if (this.student.email.split('@')[1] === 'vishnu.edu.in') {
      this.httpClient.post<any>('http://localhost:3000/user/signup', this.student)
        .subscribe(
          res => {
            this.errMssg = '';
            this.succMssg = res.success.mssg;
            console.log(res.success);
            this.student = {};
          },
          err => {
            this.errMssg = err.error.mssg;
            console.log(err);
          }
        );
    } else {
      this.errMssg = 'Email must be your college mail';
    }
  }


}
