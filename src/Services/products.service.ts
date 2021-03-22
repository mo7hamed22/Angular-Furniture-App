import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {IProduct}from '../InterFaces/productInterface'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  categoryName:string;
  public _url:string="https://fakestoreapi.com/products"
  public _urlCategory="https://fakestoreapi.com/products/categories"
  public _urlProductCategory;
  

  constructor(private _http:HttpClient) { }
  
  
  // getAllProducts():Observable<IProduct[]>{
  //   return this._http.get<IProduct[]>(this._url).pipe(
  //     catchError(
  //       (err)=>
  //       {
  //         return throwError(err.message || "Sever Error")
  //       }
  //     )
  //   )
  // }
  // getAllCategories():Observable<any>{
  //   return this._http.get<any>(this._urlCategory).pipe(
  //     catchError(
  //       (err)=>
  //       {
  //         return throwError(err.message || "Sever Error")
  //       }
  //     )
  //   )
  // }
  // getProductsCategory(categoryName):Observable<IProduct[]>{
  //   return this._http.get<IProduct[]>(`https://fakestoreapi.com/products/category/${categoryName}`).pipe(
  //     catchError(
  //       (err)=>
  //       {
  //         return throwError(err.message || "Sever Error")
  //       }
  //     )
  //   )
  // }}
}