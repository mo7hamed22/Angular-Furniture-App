

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IofferedProducts } from './interfaces/IofferedProducts';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
//import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OffersService {


  //_allProducts:string ="./assets/data/allProducts.json";
  _allProducts:string ="./assets/data/allproduct.json";

  constructor(private _http: HttpClient) { }



  getAllProducts(){
    return this._http.get<IofferedProducts[]>(this._allProducts).pipe(
      catchError(
        (err) => {
          return throwError(err.message || "Server Issue Please contact site adminstrator");
        }
      )
    )
  }

 
  getProduct(id: number){
    return this.getAllProducts()
        .pipe((map((products: IofferedProducts[]) => products.find(p => p.id === id))));
}


}
