import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsComponent } from './pages/movements/movements.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConceptsComponent } from './pages/concepts/concepts.component';
import { RouterModule } from '@angular/router';
import { FinanceRoutes } from './routes/finance.routing';



@NgModule({
  declarations: [
    MovementsComponent,
    DashboardComponent,
    ConceptsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FinanceRoutes)
  ]
})
export class FinanceModule { }
