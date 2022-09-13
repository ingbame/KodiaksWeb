import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IconsComponent } from './pages/icons/icons.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { TablesComponent } from './pages/tables/tables.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { UserComponent } from './pages/user/user.component';
import { ExamplesRoutes } from './routes/examples.routing';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(ExamplesRoutes)
  ]
})
export class ExamplesModule { }
