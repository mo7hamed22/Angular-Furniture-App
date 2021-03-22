const mongoose = require("mongoose");
const products = require("./product");
const schema = mongoose.Schema;
var Cart = new schema({
  offerName: { type: String, required: true },
  products: { type: [mongoose.Schema.Types.ObjectId], ref: products },
});
module.exports = mongoose.model("Offers", offerName);
