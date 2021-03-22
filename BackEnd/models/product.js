const mongoose = require("mongoose");

const schema = mongoose.Schema;

var Product = new schema({
  price: { type: Number, required: true },
  quantity: Number,
  productName: { type: String, required: true },
  product_img: {
    data: Buffer,
    contentType: String,
  },
  description: String,
  Category: {
    type: [String],
    enum: ["Furniture", "Decoration", "HomeDevices", " accessorize"],
  },
  discount: { type: [String], enum: ["15", "10", "20", " No Discount"] },
  rate: Number,
  color: String,
});
module.exports = mongoose.model("Product", Product);
