const mongoose = require("mongoose");

const schema = mongoose.Schema;
var User = new schema({
  type: { type: Number, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  user_img: {
    data: Buffer,
    contentType: String,
  },
  Gender: String,
  wishListLists: { type: String },
  address: String,
  prevProductsBuy: {},
  addProducts: Boolean,
  canDelete: Boolean,
  canEdit: Boolean,
  canAddOffers: Boolean,
  canAddDiscount: Boolean,
});

module.exports = mongoose.model("User", User);
