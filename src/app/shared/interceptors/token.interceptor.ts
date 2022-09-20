import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //let newRequest = request.clone();
    if (sessionStorage.getItem('authUser') && sessionStorage.getItem('authUser') != '') {
      let authUser = JSON.parse(sessionStorage.getItem('authUser')!!);

      let newRequest = request.clone({
        headers: request.headers.append('Authorization', 'Bearer ' + authUser.token)
      });
      console.log('Devuelve request con session', request);
      return next.handle(newRequest);
    } else if (this.authService.user.trim() != "" && this.authService.pass.trim() != "") {
      let newRequest = request.clone({
        headers: request.headers.append('Authorization', 'Basic ' + window.btoa(this.authService.user.trim() + ":" + this.authService.pass.trim()))
      });
      console.log('Devuelve request original', request);
      return next.handle(newRequest);
    }
    //console.log('Devuelve request original', request);
    return next.handle(request);
  }
}
