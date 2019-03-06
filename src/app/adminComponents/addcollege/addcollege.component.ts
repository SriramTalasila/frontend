import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addcollege',
  templateUrl: './addcollege.component.html',
  styleUrls: ['./addcollege.component.css']
})
export class AddcollegeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  succMssg = '';
  errMssg = '';
  college: any = {};
  ngOnInit() {
  }

  addCollege() {
    console.log(this.college);
    this.http.post<any>('http://localhost:3000/admin/addcollege', this.college)
      .subscribe(
        res => {
          this.succMssg = res.message;
          this.college = {};
        },
        err => {
          this.errMssg = err.message;
        }
    );
  }

}
