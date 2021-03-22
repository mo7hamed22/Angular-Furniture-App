const mongoose = require("mongoose");
const user = require("./user");
const product = require("./product");
const schema = mongoose.Schema;
var shipment = new schema({
  // >shipments-id
  OrderedByUser: { type: mongoose.Schema.Types.ObjectId, ref: user },
  products: { type: [mongoose.Schema.Types.ObjectId], ref: product },
  address: String,
  totalPrice: Number,
  arrivedDate: Date,
  orderedData: Date,
});
module.exports = mongoose.model("Shipment", shipment);
