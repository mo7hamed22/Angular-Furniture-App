const mongoose = require("mongoose");
const user = require("./user");
const schema = mongoose.Schema;
var Cart = new schema({
  products: { type: [mongoose.Schema.Types.ObjectId], ref: products },
  OrderedByUser: { type: mongoose.Schema.Types.ObjectId, ref: user },
  totalPrice: Number,
  coPone: String,
  dateCreated: Date,
});
module.exports = mongoose.model("Cart", Cart);
