import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-warden',
  templateUrl: './warden.component.html',
  styleUrls: ['./warden.component.css']
})
export class WardenComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }
  LogoutUser() {
    this.auth.logout();
    this.router.navigate(['/home/login']);
  }

}
