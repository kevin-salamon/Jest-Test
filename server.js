const express = require("express");
const routes = require("./routes/html-routes.js");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, function() {
  console.log(`=> API Server now listening on PORT ${PORT}!`);
});