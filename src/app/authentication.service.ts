import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(user) {
    let body = { "email": user.email, "password": user.password };
    return this.http.put('api/v1/login ', JSON.stringify(body));
  }
  setLoginData(data) {
    data = JSON.stringify(data);
    localStorage.setItem('login', data); 
    console.log("Login Data", data);
  }

  getLoginData() {
    let data = localStorage.getItem('login');
    return JSON.parse(data);
  }

  isLogged() {
    let data = this.getLoginData();
    if (data !== null) {
      return true;
    }
    else {
      return false;
    }
  }
}
