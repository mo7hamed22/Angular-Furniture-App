const express = require("express");
const { Product, schemaValidate, findOne } = require("../models/product");
const router = express.Router();
var fs = require("fs");

//get products 1
router.get("/allProducts", function (req, res, next) {
  Product.find(function (err, product) {
    if (err) {
      return next(err);
    }
    res.json(product);
  });
});
//

/* Add products 2*/
router.post("/addProducts", function (req, res, next) {
  const { error } = schemaValidate.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const product = new Product({
    productName: req.body.productName,
    description: req.body.description,
    price: req.body.price,
    product_img: req.body.product_img,
    category: req.body.category,
    quantity: req.body.quantity,
  });

  product.save(function (err, product) {
    if (err) {
      return next(err);
    }
    res.json(product);
  });
});
/* Update products 3 */
router.put("/editProduct/", function (req, res, next) {
  let obj = req.body;
  let id = req.body._id;

  Product.findOneAndUpdate(
    { _id: id },
    obj,
    { new: true },
    function (err, product) {
      if (err) {
        return next(err);
      }
      res.json(product);
    }
  );
});
/* Find product  by id 4 */
router.get("/:productId", function (req, res) {
  console.log(req.params.productId);
  const id = req.params.productId;

  Product.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Product with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Product with id=" + id });
    });
});
/* Remove product  5*/
router.delete("/:productId", function (req, res) {
  const id = req.params.productId;

  Product.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`,
        });
      } else {
        res.send({
          message: "Product was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
});

/* Preloading item objects */
router.param("product", function (req, res, next, id) {
  var query = Product.findById(id);

  query.exec(function (err, product) {
    if (err) {
      return next(err);
    }
    if (!product) {
      return next(new Error("can't find item"));
    }

    req.product = product;
    return next();
  });
});

//========

module.exports = router;
