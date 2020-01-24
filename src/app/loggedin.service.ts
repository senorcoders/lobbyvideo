import { Injectable } from '@angular/core';
import { IsLoginService } from './is-login.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedinService {

  constructor(private autorizacionService:IsLoginService,private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  	let isLogged=localStorage.getItem('login');
  	if (isLogged) {
	     this.router.navigate(['/dashboard']);
	    return false;
	 
	}
	else{
		this.router.navigate(['/']);
	    return false;
	}
}
}
