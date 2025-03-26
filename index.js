const express = require("express");
const app = express();
const route = require("./routes/User/parent");
app.use(express.json());

app.use("/user", route);
app.listen(500, function () {
  console.log("port is listening");
});
