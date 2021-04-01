import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/interfacIproduct';

@Injectable({
  providedIn: 'root'
})

export class AddProductService {
  _url = "http://localhost:5555/api/product/addProduct";
  //product: IProduct={};
  constructor(private _http: HttpClient) { }
}
