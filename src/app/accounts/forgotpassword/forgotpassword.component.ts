import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private http: HttpClient) { }

  usrname = '';
  baseUrl = 'http://localhost:3000'
  errMssg = '';
  succMssg = '';
  isMailed = false;
  resetData: any = {};
  ngOnInit() {
  }

  sendMail() {
    this.http.post<any>(this.baseUrl + '/user/forgotpassword', { username: this.usrname}).subscribe(
      res => {
        this.errMssg = '';
        this.isMailed = true;
        this.succMssg = 'Otp sent to your college Mail';
      },
      err => {
        this.succMssg = ''
        this.errMssg =  err.error.message;
      }
    );
  }

  resetPassword() {
    if (this.resetData.otp && this.resetData.password && this.usrname) {
      this.resetData.username = this.usrname;
      this.http.post<any>(this.baseUrl + '/user/resetpassword', this.resetData).subscribe(
        res => {
          this.succMssg = 'Reset Successfully';
          this.errMssg = '';
          this.resetData = {};
          this.usrname = '';
        },
        err => {
          this.succMssg = '';
          this.errMssg = 'unable to reset';
        }
      );
    } else {
      this.succMssg = '';
      this.errMssg = 'All fields are required';
    }

  }

}
