import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-adcomplaints',
  templateUrl: './adcomplaints.component.html',
  styleUrls: ['./adcomplaints.component.css']
})


export class AdcomplaintsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  complaints: any = {};
  ngOnInit() {
    this.http.get<any>('http://localhost:3000/admin/getcomplaints').subscribe(
      res => {
        console.log(res);
        this.complaints = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
