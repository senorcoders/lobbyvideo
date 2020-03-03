import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.sass']
})
export class AppMenuComponent implements OnInit {
  isLogged = false;

  constructor(private isLoggedSr: AuthenticationService,
    private router: Router) { }

  ngOnInit() {



    if(this.isLoggedSr.isLogged()){
      this.isLogged = true;
    }
  }

  logout(){
    localStorage.removeItem('login');
    this.router.navigate(["/"]);

  }

}
