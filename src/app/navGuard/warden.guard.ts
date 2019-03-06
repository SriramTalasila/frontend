import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class WardenGuard implements CanActivate, CanActivateChild {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log(this.auth.isStudent());
    if (this.auth.isWarden()) {
      return true;
    } else {
      this.router.navigate(['/home/login']);
      return false;
    }

  }
  canActivateChild(): boolean {
    if (this.auth.isWarden()) {
      return true;
    } else {
      this.router.navigate(['/home/login']);
      return false;
    }
  }
}
