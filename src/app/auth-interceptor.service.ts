import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService  implements HttpInterceptor {

  public static url = environment.apiURL;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let event: HttpRequest<any>;
      let data = localStorage.getItem('login');
      console.log(environment.apiURL);

      if (data) {
          let json = JSON.parse(data);
          let token = json['token'];


          event = req.clone({
              url: AuthInterceptorService.url + req.url,
              setHeaders: {
                  'token': `${token}`              }
          });
      } else {
          event = req.clone({
              url: AuthInterceptorService.url + req.url
          });
      }

      return next.handle(event);
  }
}
