const express = require("express");
const app = express();
const route = require("./routes/User/parent");
const orgroute = require("./routes/organization/parent");
app.use(express.json());

app.use("/user", route);

app.use("/org", orgroute);

app.listen(500, function () {
  console.log("port is listening");
});
