import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';


@Component({
  selector: 'app-viewmycomplaints',
  templateUrl: './viewmycomplaints.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./viewmycomplaints.component.css']
})
export class ViewmycomplaintsComponent implements OnInit {

  constructor(private http: HttpClient, private modalService: NgbModal, private router: Router) {
  }
  baseUrl = 'http://localhost:3000';
  complaints: any = {};
  cancelComId = '';
  errMssg = '';

  ngOnInit() {
    this.http.get<any>(this.baseUrl + '/student/viewcomplaints').subscribe(
      res => {
        console.log(res);
        this.complaints = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  open(content, cid) {
    console.log(cid);
    this.cancelComId = cid;
    this.modalService.open(content, {centered: true});
  }

  close() {
    this.modalService.dismissAll();
    console.log('Deleting the compliant' + this.cancelComId);
    this.http.post(this.baseUrl + '/student/cancelcomplaint', {comid: this.cancelComId}).subscribe(
      res => {
        this.cancelComId = '';
        this.ngOnInit();
      },
      err => {
        console.log(err);
        this.errMssg = 'Unable to Cancel the complaint';
      }
    );
  }

  feedback(comid) {
    this.router.navigate(['/student/feedback/' + comid]);
  }
}
