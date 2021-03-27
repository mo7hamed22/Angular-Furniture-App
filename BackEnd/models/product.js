const { string } = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;
var Product = new schema({
  price: { type: Number, required: true },
  quantity: Number,
  productName: { type: String, required: true, unique: true },
  product_img: String,
  mainImageIndex: { type: Number, default: 0 },

  //   data: Buffer,
  //   contentType: String,
  // },
  description: String,
  category:String,

  discount: { type: String, default: "no Discount" },
  rate: Number,
  color: String,
});
const schemaValidate = Joi.object({
  productName: Joi.required(),
  price: Joi.required(),
  description: Joi.string().min(10).max(400).required(),
}).options({ allowUnknown: true });
Product = mongoose.model("Product", Product);
module.exports = {
  Product: Product,
  schemaValidate: schemaValidate,
};
//module.exports = mongoose.model("Product", Product);
