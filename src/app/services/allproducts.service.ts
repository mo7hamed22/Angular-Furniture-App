import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { ALaccessiors, ALbedroom, ALfree, ALproducts, IProducts } from 'src/app/interfaces/interface';
import { ISingleCart } from '../interfaces/GetSingleCartInterface';
@Injectable({
  providedIn: 'root'
})

export class AllproductsService {


  allProducts: IProducts[] = [];


   _url= './assets/data/livingroom.json';
   _url2= 'http://localhost:5555/api/product/allProducts';
   _url3= './assets/data/decoration.json';
   _url4= './assets/data/bedroom.json';
   _url5= './assets/data/freespaces.json';
  public _GetSingleCart = 'https://fakestoreapi.herokuapp.com/products?limit=5'


  constructor(private _http:HttpClient) { }

  getSingleCart():Observable<ISingleCart[]>{
    return this._http.get<ISingleCart[]>(this._GetSingleCart).pipe(
      // catchError(
      //   // (err)=>{
      //   //   return (err.message || "server not fond")
      //   // }
      // )
    )
  }

  getAllProducts():Observable<ALproducts[]>{
    return this._http.get<ALproducts[]>(this._url2).pipe(

      catchError(
        (err) => {
          return throwError(err.message || "server issue ")


        }
      )
    )
  }
  getCategory() {
    this.getLivingRoomProducts().subscribe((data) => {
      this.allProducts = data;
      console.log(this.allProducts)
    })
  }




  getLivingRoomProducts(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>(this._url).pipe(
      catchError(
        (err) => {
          return throwError(err.message || "server issue ")


        }
      )
    )

  }
  getAccessiors(): Observable<ALaccessiors[]> {
    return this._http.get<ALaccessiors[]>(this._url3).pipe(

      catchError(
        (err) => {
          return throwError(err.message || "server issue ")


        }
      )
    )
  }
  getBedRoom(): Observable<ALbedroom[]> {
    return this._http.get<ALbedroom[]>(this._url4).pipe(

      catchError(
        (err) => {
          return throwError(err.message || "server issue ")


        }
      )
    )
  }
  getFree(): Observable<ALfree[]> {
    return this._http.get<ALfree[]>(this._url5).pipe(

      catchError(
        (err) => {
          return throwError(err.message || "server issue ")


        }
      )
    )
  }
}