import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
  }

  baseUrl = 'http://localhost:3000';
  complaintId = '';
  feedback: any = {};
  errMssg = '';
  succMssg = '';

  ngOnInit() {
    this.route.params.subscribe(
      params => this.complaintId = params.id);
  }

  submitFeedback() {
    this.feedback.comId = this.complaintId;
    if (this.feedback.fdata) {
      console.log(this.feedback);
      this.http.post<any>(this.baseUrl + '/student/feedback', this.feedback).subscribe(
        res => {
          this.succMssg = res.success.message;
          this.errMssg = '';
          this.feedback = {};
          setTimeout(() => { this.router.navigate(['/student/viewcomplaints']);
          }, 2000
        )
          ;
        },
        err => {
          this.errMssg = err.error.message;
        }
      );
    } else {
      this.errMssg = 'Feedback should not be empty';
    }
  }

}
