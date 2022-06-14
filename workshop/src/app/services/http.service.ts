import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {
    constructor(public httpClient: HttpClient){
    }

    doGet<T>(url: string, options: { headers: any }): Observable<T> {
        return this.httpClient.get<T>(url, options);
    }

    doPost(){

    }

    doPut(){

    }

    doPatch(){

    }

    doDelete(){

    }
}