import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/InterFaces/productInterface';
import { ProductsService } from 'src/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
products:IProduct[]=[];
//======
allProducts :any =[]
//=======
categoreProducts:IProduct[]=[];
Category:string[]=[];
categoryValue:string="jewelery";
  constructor(private _productService:ProductsService) { 
this.allProducts=[
  {
    ID: 1,
    name: "Product1",
    Quantity: 1,
    Price: 22,
    img:"../../assets/img/img3.jpg",
    discount:true
  },
  {
    ID: 1,
    name: "Product1",
    Quantity: 1,
    Price: 22,
    img:"../../assets/img/img3.jpg",
    discount:true
  },
  {
    ID: 1,
    name: "Product1",
    Quantity: 1,
    Price: 22,
    img:"../../assets/img/img3.jpg",
    discount:true
  },
  {
    ID: 1,
    name: "Product1",
    Quantity: 1,
    Price: 22,
    img:"../../assets/img/img3.jpg",
    discount:true
  },
  
  {
    ID: 2,
    name: "Product2",
    Quantity: 3,
    Price: 44,
    img: "../../assets/img/img2.jpg",
    discount:true

  },
  {
    ID:4,
    name: "Product3",
    Quantity:5,
    Price:88,
    img:"../../assets/img/img3.jpg",
    discount:false

  },
  {
    ID:5,
    name: "Product5",
    Quantity:5,
    Price:90,
    img:"../../assets/img/img3.jpg",
    discount:false

  }

]

  }
  cards = [
    {
      title: 'Card Title 1',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 2',
      description: 'This card has supporting text below as a natural lead-in to additional content.',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 3',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This text is much longer so that you can see a significant difference between the text in  previous tabs.',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    }
  ];
  slides: any = [[]];
  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
  



 // ngOnInit(): void {
    // this._productService.getAllProducts().subscribe(data=>{
    //   this.products=data
    //   console.log(data)
    // })
    // this._productService.getAllCategories().subscribe(data=>{
    //   this.Category=data 
    //   console.log(data)


    // })
    // this._productService.getProductsCategory(this.categoryValue).subscribe(data=>{
    //   this.products=data
    //   console.log(data)
    // })
   

//  }
//   getProductsCateGory(e){
//     this.categoryValue=e.value;
//     console.log(e)
      
//   }

// }
 // }
}