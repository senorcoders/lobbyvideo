import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { IsLoginService } from '../is-login.service';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.sass']
})
export class AppMenuComponent implements OnInit {
  isLogged = false;

  constructor(private isLoggedSr: IsLoginService,
    private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {

    this.isLoggedSr.isLogged.subscribe((val: boolean) => {
      this.isLogged = val;
    });



    if(this.auth.isLogged()){
      this.isLoggedSr.setLogin(true);
    }
  }

  async logout(){
     await this.isLoggedSr.setLogin(false);

    localStorage.removeItem('login');
    this.router.navigate(["/"]);

  }

}
