import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  // private addToCar = new Subject<number>()

  // sendToCar(productId:number){
  //   this.addToCar.next(productId)
  // }


  // resiveFromCar(): Observable<number>{
  //   return this.addToCar.asObservable()
  //  }
  constructor() { }


}
