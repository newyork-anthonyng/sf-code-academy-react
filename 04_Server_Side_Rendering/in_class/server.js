const path = require("path");
const express = require("express");
const app = express();

app.use("/", express.static(path.join(__dirname, "dist")));

// Comment out below for server-side rendering
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "dist"));
//
const serverRendering = require("./dist/server.bundle.js").default;
app.use("/", serverRendering);

app.listen(3000, function() {
  console.log("Server running on port 3000");
});
