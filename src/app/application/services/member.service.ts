import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MemberEntity } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpCliente: HttpClient) { }
  GetMember(id?:number): Observable<any>{
    let url = `${environment.kodiaksApi}/Application/Member/Get`;
    if(id != null){
      url += "?id=" + id;
    }
    return this.httpCliente.get<any>(url, {});

  }
}
