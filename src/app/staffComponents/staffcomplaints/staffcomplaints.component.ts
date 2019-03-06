import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-staffcomplaints',
  templateUrl: './staffcomplaints.component.html',
  styleUrls: ['./staffcomplaints.component.css']
})
export class StaffcomplaintsComponent implements OnInit {

  constructor(private http: HttpClient, private modalService: NgbModal) { }
  baseUrl = 'http://localhost:3000';
  succMssg = '';
  errMssg = '';
  techs: any = {};
  comId = '';
  technician = '';
  feedback = '';

  complaints: any = {};
  ngOnInit() {
    this.http.get<any>(this.baseUrl + '/staff/getcomplaints').subscribe(
      res => {
        console.log(res);
        this.complaints = res;
      },
      err => {
        console.log(err);
      }
    );
    this.http.get<any>(this.baseUrl + '/staff/technicians').subscribe(
      res => {
        this.techs = res;
      },
      err => {
        console.log(err.error);
      }
    );
  }

  open(content, cId) {
    this.succMssg = '';
    this.errMssg = '';
    console.log(cId);
    this.comId = cId;
    this.modalService.open(content);
  }

  assTech() {
    console.log(this.comId);
    this.http.post<any>(this.baseUrl + '/staff/assigntechnician', {comid: this.comId, techid: this.technician}).subscribe(
      res => {
        this.errMssg = '';
        this.succMssg = 'Technician assigned Successfully';
        setTimeout(() => {
          this.modalService.dismissAll();
          this.technician = '';
          this.ngOnInit();
        }, 4000);
      },
      err => {
        console.log(err);
        this.errMssg = 'Failed to assign technician';
      }
    );
    this.modalService.dismissAll();

  }

  closeRequest() {
    this.http.post<any>(this.baseUrl + '/staff/closerequest', { comid:this.comId, feedback: this.feedback}).subscribe(
      res => {
        this.succMssg = 'Request Closed';
        this.errMssg = '';
        setTimeout(() => {
          this.modalService.dismissAll();
          this.feedback = '';
          this.ngOnInit();
        }, 4000);
      },
      err => {
        this.errMssg = 'Failed to close Request';
        this.succMssg = '';
      }
    );
  }
}
