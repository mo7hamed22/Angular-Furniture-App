const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/Auth");
const productRoute = require("./routes/Product");
const router = express.Router();
bodyParser = require("body-parser");
const _PORT = 5555;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var uri = "mongodb://localhost:27017/furnitureApp";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connecting to database successful"))
  .catch((err) => console.error("could not connect to mongo DB", err));
app.use("/api/product", productRoute);

app.post("/api/Auth", authRoute);
// app.use("/", (req, res) => {
//   res.status(404).send("Not Found Page");
// });

app.listen(_PORT, () => {
  console.log("Server Is Running On 5555");
});
module.exports = router;
