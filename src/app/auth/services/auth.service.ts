import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionEntity } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: string = "";
  pass: string = "";

  constructor(private httpCliente: HttpClient) { }
  login(userName?: string, password?: string): Observable<any> {
    let url = `${environment.kodiaksApi}/Security/Session/LoginAuthentication`;
    this.user = userName ?? "";
    this.pass = password ?? "";

    return this.httpCliente.post<any>(url, {});

    // let headers_object = new HttpHeaders();
    // headers_object.append('Content-Type', 'application/json');
    // headers_object.append("Authorization", "Basic " + window.btoa(userName + ":" + password));
    // console.log(headers_object);
    // let httpOptions = {
    //   headers: headers_object
    // };
    // console.log(httpOptions);
    // return this.httpCliente.post<any>(url, {},httpOptions);
  }
}
