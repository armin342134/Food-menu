const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/menu-food")
  .then(console.log("connect to db success"))
  .catch((err) => console.log(err.message));
