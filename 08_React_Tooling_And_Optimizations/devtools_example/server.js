const express = require("express");
const path = require("path");
const app = express();

app.use("/", express.static(__dirname));

app.listen(3000, () => {
  console.log("Server listening on 3000");
});
