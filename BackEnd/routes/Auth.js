//for encrypt the password before saving into the database
//const bcrypt = require("bcrypt");
const express = require("express");
const { User, schemaValidate, findOne } = require("../models/user");
const router = express.Router();
// register End Point
router.post("/register", async (req, res) => {
  // First Validate The Request
  // const { error } = schemaValidate.validate(req.body);
  // if (error) {
  //   return res.status(400).send(error.details[0].message);
  // }
  //
  //    // Check if this user already exists

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("That user already exists !");
  } else {
    // Insert the new user if they do not exist yet
    console.log(req);

    const user = new User({
      type: req.body.type,
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      cartData: [...req.body.cartData],
      wishListLists: req.body.wishListLists,
    });
    console.log("CartData", user.cartData);

    await user.save();
    //user.password = await bcrypt.hash(user.password, salt);

    res.send(user);
  }
});
//Login End Point
router.post("/login", async (req, res) => {
  let user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
    type: req.body.type,
  });
  if (!user) {
    return res.status(400).json({
      message: "User Not Exist",
    });
  } else
    res.status(200).json({
      wishListLists: user.wishListLists,
      cartData: user.cartData,
      id: user.id,
      message: "User Logged in Successfully",
    });
});
// ======
router.get("/:userId", function (req, res) {
  console.log(req.params.userId);
  const id = req.params.userId;
  User.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving User with id=" + id });
    });
});

module.exports = router;
