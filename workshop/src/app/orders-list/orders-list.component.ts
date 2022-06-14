import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import HOST from '../models/host';
import Order from '../models/orders';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnDestroy {

  orders: Order[] = [];
  subscription: Subscription = new Subscription();

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    const ordersUrl = `${HOST}/orders`;
    this.subscription = this.ordersService.getOrders(ordersUrl).subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

