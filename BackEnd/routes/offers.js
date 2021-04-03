// const express = require("express");

// const { offer } = require("../models/offers");
// const router = express.Router();

// var fs = require("fs");

// router.post("/addProducts", function (req, res, next) {
//   const { error } = schemaValidate.validate(req.body);
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }
//   const product = new Product({
//     req
//   });

//   product.save(function (err, product) {
//     if (err) {
//       return next(err);
//     }
//     res.json(product);
//   });
// });
