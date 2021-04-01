const mongoose = require("mongoose");
const user = require("./user");
const schema = mongoose.Schema;
var Cart = new schema({
  products: Array,
  OrderedByUser: String,
  totalPrice: Number,
  coPone: String,
  dateCreated: Date,
});
module.exports = mongoose.model("Cart", Cart);
