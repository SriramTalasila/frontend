import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor( private http: HttpClient) { }

  category: any = {}
  succMssg = '';
  errMssg = '';
  ngOnInit() {
  }

  addCategeory() {
      console.log(this.category);
      this.http.post<any>('http://localhost:3000/admin/addsection', this.category)
        .subscribe(
          res => {
            this.succMssg = res.message;
          },
          err => {
            this.errMssg = err.message;
          }
        );
  }

}
