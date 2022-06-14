import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from '../orders-list/orders-list.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { OrdersService } from '../services/orders.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    OrdersListComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    OrdersService
  ],
  exports: [
    OrdersListComponent,
    OrderDetailsComponent
  ]
})
export class OrdersModule { }
