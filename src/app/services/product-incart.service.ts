import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ALproducts } from '../interfaces/interface';
@Injectable({
  providedIn: 'root'
})
export class ProductIncartService {

  constructor() { }
  p =2;
  test(){
    return 3
  }
  private addToCar = new Subject<string>()

  sendToCar(productId:string){
    this.addToCar.next(productId)
  }


  resiveFromCar(): Observable<string>{
    return this.addToCar.asObservable()
   }
}
