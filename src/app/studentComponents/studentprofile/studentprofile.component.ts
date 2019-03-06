import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000';
  student: any = {};
  hstl: any = {};
  clg: any = {};

  ngOnInit() {
    this.http.get<any>(this.baseUrl + '/student/mydata').subscribe(
      res => {
        console.log((res));
        this.student = res.student;
        this.hstl = res.hstl;
        this.clg = res.clg;
      },
      err => {
        console.log(err.error);
      }
    );
  }

}
