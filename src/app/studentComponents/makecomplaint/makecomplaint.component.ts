import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-makecomplaint',
  templateUrl: './makecomplaint.component.html',
  styleUrls: ['./makecomplaint.component.css']
})
export class MakecomplaintComponent implements OnInit {

  constructor(private http: HttpClient) { }

  cate: any;
  complaint: any = {};
  errMssg = '';
  succMssg = '';
  ngOnInit() {
    this.http.get<any>('http://localhost:3000/other/getsections').subscribe(
      res => {
        console.log(res);
        this.cate = res;
      },
      err => {}
    );
  }
  makeComplaint() {
    console.log(this.complaint);
    if (this.complaint.section && this.complaint.title && this.complaint.description) {
      this.http.post<any>('http://localhost:3000/student/makecomplaint', this.complaint).subscribe(
        res => {
          this.errMssg = '';
          this.succMssg = res.success.message;
          this.complaint = {};
        },
        err => {
          this.errMssg = err.error.message;
        }
      );
    } else {
      this.errMssg = 'All fields are required';
    }
  }
  onSubmit() {
    console.log('onsubmit');
  }
}
