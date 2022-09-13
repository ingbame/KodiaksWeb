import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginEntity } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(userName?: string, password?: string): Observable<LoginEntity> {

    let result: LoginEntity = { userName: '8116836441', password: '123456'};;

    if (userName == '8116836441' && password == '123456') {
      // this.authUser = result;
      sessionStorage.setItem('authUser', JSON.stringify(result));
      return of(result);
    }

    return of();

  }
}
