import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Order from "../models/orders";
import { HttpService } from "./http.service";

@Injectable()
export class OrdersService {

    constructor(private httpService: HttpService){

    }

    getOrders(ordersUrl: string): Observable<Order[]> {
        return this.httpService.doGet(ordersUrl, { headers: null });
    }
}