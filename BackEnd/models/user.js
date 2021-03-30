const Joi = require("joi");
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
  cartData: [],
  Gender: String,
  wishListLists: [],
  address: String,
  prevProductsBuy: {},
  addProducts: Boolean,
  canDelete: Boolean,
  canEdit: Boolean,
  canAddOffers: Boolean,
  canAddDiscount: Boolean,
});
const schemaValidate = Joi.object({
  type: Joi.required(),
  userName: Joi.string().min(5).max(50).required(),
  email: Joi.string().min(5).max(255).required().email(),
  password: Joi.string().min(5).max(255).required(),
});

User = mongoose.model("user", User);

module.exports = {
  User: User,
  schemaValidate: schemaValidate,
};
// exports.User = User;
// exports.validate = validateUser;
