import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionEntity } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCliente: HttpClient) { }
  login(userName?: string, password?: string): Observable<SessionEntity> {
    let url = `${environment.kodiaksApi}/Security/Session/LoginAuthentication`;

    let headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa(userName + ":" + password));
    console.log(headers_object);
    let httpOptions = {
      headers: headers_object
    };
    console.log(httpOptions);
    let response: any = this.httpCliente.post(url, {},httpOptions);
    console.log(response);

    let result: SessionEntity = { userName: '8116836441', password: '123456', token: response};;

    if (userName == '8116836441' && password == '$Parral00') {
      // this.authUser = result;
      sessionStorage.setItem('authUser', JSON.stringify(result));
      return of(result);
    }

    return of();

  }
  // find(): Observable<any> {
  //   let url = `${environment.api}/user/find?pageSize=20`;
  //   return this.httpCliente.get(url, {});

  // }
}
