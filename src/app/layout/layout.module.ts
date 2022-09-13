import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { IconsComponent } from '../pages/icons/icons.component';
import { NotificationsComponent } from '../pages/notifications/notifications.component';
import { TablesComponent } from '../pages/tables/tables.component';
import { TypographyComponent } from '../pages/typography/typography.component';
import { UserComponent } from '../pages/user/user.component';
import { LayoutComponent } from './pages/layout.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutes } from './routes/layout.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    LayoutComponent,

    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ]
})
export class LayoutModule { }
