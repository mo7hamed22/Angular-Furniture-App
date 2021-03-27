import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


import { ALproducts } from 'src/app/interfaces/interface';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AllproductsService {

  //  _url= './assets/data/livingroom.json';
   _url= 'http://localhost:5555/api/product/allProducts';
  //  _url3= './assets/data/decoration.json';
  //  _url4= './assets/data/bedroom.json';
  //  _url5= './assets/data/freespaces.json';

  constructor(private _http:HttpClient) { }
  getAllProducts():Observable<ALproducts[]>{
    return this._http.get<ALproducts[]>(this._url).pipe(
  
     catchError(
       (err)=>{
         return throwError(err.message || "server issue ")
         
  
        })
    )
    
}
}

  //_url = './assets/data/livingroom.json';
  // _url2 = './assets/data/allproducts.json';
  // _url3 = './assets/data/decoration.json';
  // _url4 = './assets/data/bedroom.json';
  // _url5 = './assets/data/freespaces.json';
  // _url = "http://localhost:5553/api/product/allProducts";

//   allProducts: IProducts[] = [];

//   constructor(private _http: HttpClient) { }
//   getAllProducts(): Observable<ALproducts[]> {
// =======
//    _url= './assets/data/livingroom.json';
//    _url2= 'http://localhost:5555/api/product/allProducts';
//    _url3= './assets/data/decoration.json';
//    _url4= './assets/data/bedroom.json';
//    _url5= './assets/data/freespaces.json';

//   constructor(private _http:HttpClient) { }
//   getAllProducts():Observable<ALproducts[]>{
// >>>>>>> ef1039b113bde8ed2d5285a809e85b65cfea12e9
//     return this._http.get<ALproducts[]>(this._url).pipe(

//       catchError(
//         (err) => {
//           return throwError(err.message || "server issue ")


//         }
//       )
// >>>>>>> d2022f98299f41671f106d4e32b67757054e60d6
//     )
//   }
// }
//   // getCategory() {
  //   this.getLivingRoomProducts().subscribe((data) => {
  //     this.allProducts = data;
  //     console.log(this.allProducts)
  //   })
  // }



 
//   getLivingRoomProducts():Observable<IProducts[]>{
//     return this._http.get<IProducts[]>(this._url).pipe(
 
//      catchError(
//        (err)=>{
//          return throwError(err.message || "server issue ")
         
 
//      }
//      )
//     )
    
// }
// getAccessiors():Observable<ALaccessiors[]>{
//   return this._http.get<ALaccessiors[]>(this._url3).pipe(

//    catchError(
//      (err)=>{
//        return throwError(err.message || "server issue ")
       

//    }
//    )
//   )
// }
// getBedRoom():Observable<ALbedroom[]>{
//   return this._http.get<ALbedroom[]>(this._url4).pipe(

//    catchError(
//      (err)=>{
//        return throwError(err.message || "server issue ")
       

//    }
//    )
//   )
// }
// getFree():Observable<ALfree[]>{
//   return this._http.get<ALfree[]>(this._url5).pipe(

//    catchError(
//      (err)=>{
//        return throwError(err.message || "server issue ")
       

//    }
//    )
//   )



//   getLivingRoomProducts(): Observable<IProducts[]> {
//     return this._http.get<IProducts[]>(this._url).pipe(
//       catchError(
//         (err) => {
//           return throwError(err.message || "server issue ")


//         }
//       )
//     )

//   }
//   getAccessiors(): Observable<ALaccessiors[]> {
//     return this._http.get<ALaccessiors[]>(this._url3).pipe(

//       catchError(
//         (err) => {
//           return throwError(err.message || "server issue ")


//         }
//       )
//     )
//   }
//   getBedRoom(): Observable<ALbedroom[]> {
//     return this._http.get<ALbedroom[]>(this._url4).pipe(

//       catchError(
//         (err) => {
//           return throwError(err.message || "server issue ")


//         }
//       )
//     )
//   }
//   getFree(): Observable<ALfree[]> {
//     return this._http.get<ALfree[]>(this._url5).pipe(

//       catchError(
//         (err) => {
//           return throwError(err.message || "server issue ")


//         }
//       )
//     )
//   }

