import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.sass']
})
export class AppMenuComponent implements OnInit {
  isLogged = false;

  constructor(private isLoggedSr: AuthenticationService) { }

  ngOnInit() {



    if(this.isLoggedSr.isLogged()){
      this.isLogged = true;
    }
  }

}
