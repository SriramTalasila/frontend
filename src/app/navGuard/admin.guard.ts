import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log(this.auth.isAdmin());
    if (this.auth.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/home/login']);
      return false;
    }

  }
  canActivateChild(): boolean {
    if (this.auth.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/home/login']);
      return false;
    }
  }

}
