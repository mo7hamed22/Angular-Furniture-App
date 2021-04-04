import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/interfacIproduct';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  _urlGetProduct = "http://localhost:5555/api/product/"
  _url = "http://localhost:5555/api/product/editProduct";
  //product: IProduct={};
  constructor(private _http: HttpClient) { }
  getProductById(productId: string): Observable<IProduct> {
    return this._http.get<IProduct>
      (this._urlGetProduct + productId)
  }

  //Edit Product
  editProduct(product: IProduct) {
    return this._http.put<IProduct>
      (this._url, product)
  }
}