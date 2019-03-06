import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {subscribeOn} from 'rxjs/operators';


@Component({
  selector: 'app-addhostel',
  templateUrl: './addhostel.component.html',
  styleUrls: ['./addhostel.component.css']
})
export class AddhostelComponent implements OnInit {

  constructor(private http: HttpClient) { }
  succMssg = '';
  errMssg = '';
  hostl: any = {};
  ngOnInit() {
  }

  addHostel() {
    console.log(this.hostl);
    this.http.post<any>('http://localhost:3000/admin/addhostel', this.hostl)
      .subscribe(
        res => {
          this.succMssg = res.message;
          this.hostl = {};
        },
        err => {
          this.errMssg = err.message;
        }
    );
  }

}
