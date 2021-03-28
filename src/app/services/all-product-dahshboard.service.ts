import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../interfaces/interfacIproduct';

@Injectable({
  providedIn: 'root'
})
export class AllProductDahshboardService {
  _url = "http://localhost:5555/api/product/allProducts";
  allProducts: IProduct[] = [];

  constructor(private _http: HttpClient) { }

  getALLProductsForDashboard(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._url).pipe(
      catchError(
        (err) => {
          return throwError(err.message || "server issue ")

        }
      )
    )

  }
}
