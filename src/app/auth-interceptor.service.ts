import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  public static url = environment.apiURL;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let event: HttpRequest<any>;
      let data = localStorage.getItem('login');

    

      if (data) {
          let json = JSON.parse(data);
          let token = json['token'];


          event = req.clone({
              url: AuthInterceptorService.url + req.url,
              setHeaders: {
                  'token': `${token}`,
                  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
              }
          });
      } else {
          event = req.clone({
              url: AuthInterceptorService.url + req.url
          });
      }

      return next.handle(event);
  }
}
