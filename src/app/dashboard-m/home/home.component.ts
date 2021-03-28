import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AllProductDahshboardService } from 'src/app/services/all-product-dahshboard.service';
import { IProduct } from 'src/app/interfaces/interfacIproduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  productList: IProduct[] = [];
  col = 3; row = 3;

  errorMsg: any = "";
  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [

  //         { title: 'Card 1', cols: 2, rows: 1 },
  //         { title: 'Card 2', cols: 2, rows: 1 },
  //         { title: 'Card 3', cols: 2, rows: 1 },
  //         { title: 'Card 4', cols: 2, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 1, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 1 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  constructor(private breakpointObserver: BreakpointObserver,
    private allProductService: AllProductDahshboardService) { }
  ngOnInit(): void {

    this.allProductService.getALLProductsForDashboard().subscribe(
      data => {
        this.productList = data;
        console.log("List p", this.productList)
      },
      serviceErr => {
        this.errorMsg = serviceErr;
      })

  }
}
