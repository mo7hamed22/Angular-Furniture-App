import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { IProduct } from 'src/app/interfaces/interfacIproduct';
import { AddProductService } from 'src/app/services/add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']

})
export class AddProductComponent implements OnInit {
  addProducts = this.fb.group({
    productName: ['', [Validators.required, Validators.minLength(10)]],
    price: [0, [Validators.required]],
    category: [''],
    description: ['', [Validators.required, Validators.minLength(20)]],
    productImages: [''],
    alt_ProductImages: this.fb.array([]),
    discount: [''],
    color: ['']
  })

  addMoreProducts = this.fb.array([])



  get alt_ProductImages() {
    return this.addProducts.get('alt_ProductImages') as FormArray;

  }

  get productName() {
    return this.addProducts.get('productName');
  }

  get price() {
    return this.addProducts.get('price');
  }
  get category() {
    return this.addProducts.get('category');
  }

  get description() {
    return this.addProducts.get('description');
  }
  get productImages() {
    return this.addProducts.get('productImages');
  }
  get discount() {
    return this.addProducts.get('discount');
  }
  get color() {
    return this.addProducts.get('color');
  }

  constructor(private fb: FormBuilder,
    private _addProductService: AddProductService) { }

  ngOnInit(): void {
  }

  addAnotherImage() {
    this.alt_ProductImages.push(this.fb.control(''))

  }
  removeImage(indx: number) {
    this.alt_ProductImages.removeAt(indx)
  }
  //on Submit 
  submit() {
    console.log(this.addProducts.value)
    // product:<IProduct> = this.addProducts.value;
    this._addProductService.addProduct(this.addProducts.value).subscribe(
      data => {
        console.log("Product Added", data)
      },
      err => {
        console.log("Bad Sever connection", err)

      }
    )

  }
  addNewForm() {
    this.addMoreProducts.push(this.fb.group({
      ProductName: ['', [Validators.required, Validators.minLength(10)]],
      price: [0, [Validators.required]],
      category: [''],
      description: ['', [Validators.required, Validators.minLength(20)]],
      productImages: [''],
      alt_ProductImages: this.fb.array([]),
      discount: [''],
      color: ['']
    }))
  }
  deleteProduct(indx: number) {
    this.addMoreProducts.removeAt(indx)
  }

  // =======
  get newProductName() {
    return this.addProducts.get('productName');
  }

  get newPrice() {
    return this.addProducts.get('price');
  }
  get newCategory() {
    return this.addProducts.get('category');
  }

  get newDescription() {
    return this.addMoreProducts.get('description');
  }
  get newProductImages() {
    return this.addMoreProducts.get('productImages');
  }
  get newDiscount() {
    return this.addMoreProducts.get('discount');
  }
  get newColor() {
    return this.addMoreProducts.get('color');
  }


}
