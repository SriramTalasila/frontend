import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.component.html',
  styleUrls: ['./technicians.component.css']
})
export class TechniciansComponent implements OnInit {

  technicians: any ;
  constructor(private http: HttpClient, private modalService: NgbModal) { }
  baseurl = 'http://localhost:3000';
  deleteId = '';
  row = 1;

  ngOnInit() {
    this.row = 1;
    this.http.get<any>(this.baseurl + '/staff/technicians').subscribe(
      res => {
        this.technicians = res;
      }, err => {
        console.log(err);
      }
    );
  }

  open(content, did) {
    this.deleteId = did;
    this.modalService.open(content);
  }

  deleteTech() {
    console.log(this.deleteId );
    this.http.post<any>(this.baseurl + '/staff/deletetechnician', { tid: this.deleteId}).subscribe(
      res => {
        this.modalService.dismissAll();
        this.ngOnInit();
      }, err => {
        alert('Failed to delete');
      }
    );
  }
  increase() {
    return this.row++;
  }

}
