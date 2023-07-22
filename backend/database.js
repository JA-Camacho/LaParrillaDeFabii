const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1/restaurante";
mongoose.set('strictQuery', false);
mongoose.pluralize(null);
mongoose
  .connect(URI)
  .then((db) => console.log("DB conectada"))
  .catch((err) => console.error(err));

module.exports = mongoose;