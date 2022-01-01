const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 32,
   },
   email: {
      type: String,
      required: true,
      minlength: 7,
      maxlength: 64,
   },
   password: {
      type: String,
      required: true,
      min: 8,
      max: 16
   },
});

module.exports = mongoose.model("admin", adminSchema);
