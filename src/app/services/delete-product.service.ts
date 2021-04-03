import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/interfacIproduct';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {

  _url = "http://localhost:5555/api/product/";
  //product: IProduct={};
  constructor(private _http: HttpClient) { }
  deleteProduct(productId: string) {
    return this._http.delete<IProduct>
      ("http://localhost:5555/api/product/" + productId)
  }
}
