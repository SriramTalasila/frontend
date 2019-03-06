import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  LogoutUser() {
    this.auth.logout();
    this.router.navigate(['/home/login']);
  }
}
