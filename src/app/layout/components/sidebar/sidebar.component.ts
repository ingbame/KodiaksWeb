import { Component, OnInit } from "@angular/core";
import { ROUTES } from "../../models/items-menu";
import { LayoutService } from "../../services/layout.service";

import jwt_decode from "jwt-decode";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  urlRedirect?: string;
  menuItems: any[] = [];

  constructor(private layoutService: LayoutService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (sessionStorage.getItem('authUser') && sessionStorage.getItem('authUser') != '') {
      let authUser = JSON.parse(sessionStorage.getItem('authUser')!!);
      let decoded: any = jwt_decode(authUser.token);
      const expireDate = (decoded.exp * 1000);
      if (expireDate < Date.now()) {
        this.activedRoute.paramMap.subscribe(param => {
          if (param.get('url') && param.get('url')!!.length > 0) {
            this.urlRedirect = param.get('url')!!;
          }
        });

        sessionStorage.removeItem('authUser');
        if (!this.urlRedirect) {
          this.router.navigateByUrl('');
        } else {
          this.router.navigateByUrl(this.urlRedirect);
        }
        return;
      }
      this.layoutService.GetMenu().subscribe({
        next: (res) => {
          console.log('next', res);
          res.forEach((item: any) => {
            let itemVal: any = ROUTES.filter(menuItem => menuItem.itemKey == item.itemKey)[0];
            if (itemVal != undefined){
              itemVal.icon = item.iconSource;
              this.menuItems.push(itemVal)
            }
            console.log('item.title',item.itemKey);
            console.log('itemVal',itemVal);
          });
        },
        error: (err) => { console.log('error', err); },
        complete: () => { }

      });
    }
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
