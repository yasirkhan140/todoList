const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://0.0.0.0/todo_list");
const db = mongoose.connection;

db.on("error", (e) => {
  console.log(e);
});

db.once("open", function () {
  console.log("Connected to Database:: MongoDB");
});

module.exports = db;
