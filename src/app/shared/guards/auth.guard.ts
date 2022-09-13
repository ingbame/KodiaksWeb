import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private activedRoute: ActivatedRoute) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('AuthGuard - canActivate');

    console.log('route.url', route.url);
    console.log('state.url', state.url);

    if (sessionStorage.getItem('authUser') && sessionStorage.getItem('authUser') != '') {
      return true;
    } else {
      if (state.url == '' || state.url == '/') {
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['login', { url: state.url }]);
      }

    }

    return false;
  }

}
