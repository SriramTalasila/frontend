import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  sections;
  staffmember: any = {};
  errMssg = '';
  succMssg = '';

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/other/getsections').subscribe(
      res => {
        this.sections = res;
      },
      err => {
        this.errMssg = 'failed to load please try after sometime';
      }
    );
  }

  addStaff() {
    if (this.staffmember.password === this.staffmember.cnfpassword) {
      console.log(this.staffmember);
      if (this.staffmember.phone && this.staffmember.username &&
          this.staffmember.password && this.staffmember.fname && this.staffmember.email) {
        this.http.post<any>('http://localhost:3000/admin/addstaff', this.staffmember)
          .subscribe(
            res => {
              this.errMssg = '';
              this.succMssg = res.success.mssg;
              this.staffmember = {};
            },
            err => {
              this.succMssg = '';
              console.log(err);
              this.errMssg = err.error.mssg;
              if ( err.status === 409) {
                this.errMssg = 'Username/email already exist';
              }
            }
          );
      } else {
        this.succMssg = '';
        this.errMssg = 'All Field required';
      }
    } else {
      this.succMssg = '';
      this.errMssg = 'Password and confirm password doesn\'t match';
    }
  }
}
