import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  editProduct() {
    this.addProducts.patchValue({
      productName: "Product1"
    })
  }
  addAnotherImage() {
    this.alt_ProductImages.push(this.fb.control(''))

  }

}
