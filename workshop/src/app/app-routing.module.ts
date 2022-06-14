import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersListComponent } from './orders-list/orders-list.component';

const routes: Routes = [
  { path: 'orders-list', component: OrdersListComponent, pathMatch: 'full'},
  { path: 'orders-details', component: OrderDetailsComponent, pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  { path: '', component: DashboardComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
