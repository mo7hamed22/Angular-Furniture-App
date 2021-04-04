import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AllProductDahshboardService } from 'src/app/services/all-product-dahshboard.service';
import { IProduct } from 'src/app/interfaces/interfacIproduct';
import { DeleteProductService } from 'src/app/services/delete-product.service';
import { EditProductService } from 'src/app/services/edit-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  productList: IProduct[] = [];
  col = 2; row = 3;

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
    private allProductService: AllProductDahshboardService,
    private deleteProductService: DeleteProductService,
    private editProductService: EditProductService,
    private route: Router
  ) { }
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
  deleteProduct(productId: string) {
    this.productList = this.productList.filter(product => {
      return product._id != productId;
    })
    this.deleteProductService.deleteProduct(productId).subscribe(
      res => {
        console.log("Product Deleted !", res)
      },
      err => {
        console.log("Error", err)

      }
    )

  }

  editProduct(productId: string) {

    this.route.navigate(['/home_d/editProduct', productId])
  }
}
