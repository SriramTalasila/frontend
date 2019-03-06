import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthService {
  private loginUrl = 'http;//localhost:3000/user/login';

  constructor(private http: HttpClient) { }

  loginUser(user) {
    return this.http.post<any>('http://localhost:3000/user/login', user);
  }

  isloggedin() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    }

  }

  isAdmin() {
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('role') === 'Admin') {
        return true;
      } else {
        return false;
      }

    } else {
      return false;
    }

  }

  isStudent() {
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('role') === 'student') {
        return true;
      } else {
        return false;
      }

    } else {
      return false;
    }

  }

  isStaff() {
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('role') === 'Staff') {
        return true;
      } else {
        return false;
      }

    } else {
      return false;
    }

  }

  isWarden() {
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('role') === 'warden') {
        return true;
      } else {
        return false;
      }

    } else {
      return false;
    }

  }

  getToken() {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token')
    } else {
      return null;
    }
  }

}
