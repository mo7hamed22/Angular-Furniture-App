import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/interfacIproduct';
import { AddProductService } from 'src/app/services/add-product.service';
import { EditProductService } from 'src/app/services/edit-product.service';

@Component({
  selector: 'app-edit-productc',
  templateUrl: './edit-productc.component.html',
  styleUrls: ['./edit-productc.component.scss']
})
export class EditProductcComponent implements OnInit {
  // =====
  newProduct: IProduct = {
    _id: "", category: "", description: "",
    discount: "", price: 0, productName: "", product_img: "", quantity: 0
  };
  //FormGroup
  addProducts = this.fb.group({
    productName: ['', [Validators.required, Validators.minLength(10)]],
    price: [0, [Validators.required]],
    category: [''],
    description: ['', [Validators.required, Validators.minLength(20)]],
    productImages: [''],
    alt_ProductImages: this.fb.array([]),
    discount: [''],
    color: [''],
    _id: ['']
  })
  //Ad
  addAnotherImage() {
    this.alt_ProductImages.push(this.fb.control(''))

  }
  removeImage(indx: number) {
    this.alt_ProductImages.removeAt(indx)
  }

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
  // ======
  productId: any = "";

  constructor(private activeRoute: ActivatedRoute,
    private editProductService: EditProductService,
    private fb: FormBuilder,
    private _addProductService: AddProductService
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      res => {
        this.productId = res.get("productId")
        this.editProductService.getProductById(this.productId).subscribe(
          data => {
            this.newProduct = data

            this.addProducts.patchValue({
              productName: this.newProduct.productName,
              category: this.newProduct.category,
              price: this.newProduct.price,
              description: this.newProduct.description,
              productImages: this.newProduct.product_img,
              // alt_ProductImages: this.newProduct.product_img,
              discount: this.newProduct.discount,
              _id: this.newProduct._id
            })
          },
          err => {
            throw `Error ${err}`
          }
        )
        console.log("id", this.productId)
      },
      err => {
        throw `Error ${err}`
      }
    )
    //Get Product BY ID

    this.addProducts.patchValue({
      productName: this.newProduct.productName,
      category: this.newProduct.category,
      price: this.newProduct.price,
      description: this.newProduct.description,
      productImages: this.newProduct.product_img,
      // alt_ProductImages: this.newProduct.product_img,
      discount: this.newProduct.discount,
    })

  }
  //Edit Product 
  submit() {
    console.log(this.addProducts.value)
    // product:<IProduct> = this.addProducts.value;
    this.editProductService.editProduct(this.addProducts.value).subscribe(
      data => {
        console.log("Product Edited", data)
      },
      err => {
        console.log("Bad Sever connection", err)

      }
    )

  }

}
