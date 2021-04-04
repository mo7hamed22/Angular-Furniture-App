export interface IProduct {
    _id: string;
    product_img: string;
    productName: String;
    description: string;
    price: number;
    category?: string;
    quantity: Number,
    discount?: String
    color?: string

}