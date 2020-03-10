import { Injectable } from '@angular/core';
import { IsLoginService } from './is-login.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedinService {

  constructor(private autorizacionService:IsLoginService,private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
	let isLogged=this.autorizacionService.isLogged.value;
	if (isLogged) {
	    return true;
	 
	}
	else{
		this.router.navigate(['/']);
	    return false;
	}
}
}
