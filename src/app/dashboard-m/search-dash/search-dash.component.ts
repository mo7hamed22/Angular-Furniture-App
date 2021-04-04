import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ALproducts } from 'src/app/interfaces/interface';
import { AllproductsService } from 'src/app/services/allproducts.service';
export interface State {
  flag: string;
  name: string;
  population: string;
  id: string
}
@Component({
  selector: 'app-search-dash',
  templateUrl: './search-dash.component.html',
  styleUrls: ['./search-dash.component.scss']
})
export class SearchDashComponent implements OnInit {

  constructor(
    private allproducts: AllproductsService,
  ) { }

  //start nada 
  //autocomplet function



  stateCtrl = new FormControl();

  states: ALproducts[] = []
  // states :any;

  filteredStates: Observable<ALproducts[]> | undefined;

  dispayFun(subject: { productName: string; }) {
    return subject ? subject.productName : undefined
  }

  ngOnInit(): void {

    this.allproducts.getAllProducts().subscribe(
      data => {
        this.states = data
      }
    )
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );

  }


  private _filterStates(value: string): ALproducts[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.productName.toLowerCase().indexOf(filterValue) === 0);
  }
  showProduct(id: string) {

  }

}
