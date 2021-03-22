const bodyParser = require("body-parser");
const express = require("express");
const User = require("./models/user");
const router = express.Router();

router.post("/register", async (req, res) => {
  // const user = new User({
  //   type: req.body.type,
  //   userName: req.body.userName,
  //   password: req.body.password,
  //   email: req.body.email,
  // });
  var user = req.body;
  User.create(user, (err, data) => {
    if (!err) {
      console.log(data);
      res.status(202).send(data);
    } else {
      res.status(400).send("Invalid User data");
    }
  });

  // await user.save((err, user) => {
  //   if (err) {
  //     res
  //       .status(500)
  //       .send(
  //         "There was an error on the server and the request could not be completed."
  //       );
  //   } else res.status(200).send("User Created With Data :" + user);
});
// console.log(req.body);
// const user = req.body;
// register.create(user, (err, suc) => {
//   if (err) return "Not Found";
//   else res.send("Done Created");
// });
module.exports = router;
