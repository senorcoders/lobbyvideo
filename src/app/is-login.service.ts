import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoginService {

  constructor() { }
  public isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    setLogin(value: boolean) {
        this.isLogged.next(value);
    }
}
