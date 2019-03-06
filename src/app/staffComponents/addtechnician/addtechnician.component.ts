import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addtechnician',
  templateUrl: './addtechnician.component.html',
  styleUrls: ['./addtechnician.component.css']
})
export class AddtechnicianComponent implements OnInit {

  constructor(private http: HttpClient) { }

  errMssg = '';
  succMssg = '';

  technician: any = {};
  ngOnInit() {
  }

  addTech() {
    if (this.technician.name && this.technician.phone) {
      this.http.post<any>('http://localhost:3000/staff/addtechnician', this.technician).subscribe(
        res => {
          this.errMssg = '';
          this.succMssg = 'SuccessFully Added to technician';
          this.technician = {};
        },
        err => {
          this.errMssg = 'failed to add technician';
          this.succMssg = '';
        }
      );
    } else {
      this.errMssg = 'All field required';
    }
  }
}
