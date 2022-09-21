import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './pages/members/members.component';
import { RolesComponent } from './pages/roles/roles.component';
import { RouterModule } from '@angular/router';
import { ApplicationRoutes } from './routes/application.routing';
import { MenuComponent } from './pages/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [MembersComponent,RolesComponent, MenuComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(ApplicationRoutes)
  ],
  bootstrap:[MembersComponent]
})
export class ApplicationModule { }
