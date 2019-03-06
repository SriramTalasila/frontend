import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
      if (this.auth.isloggedin()) {
        const role = localStorage.getItem('role');
        if (role === 'Admin') {
            this.router.navigate(['/admin']);
          }
          if (role === 'student') {
            this.router.navigate(['/student']);
          }
          if (role === 'Staff') {
            this.router.navigate(['/staff']);
          }
      }
    }

}
