const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  name: String,
  Students: [
    {
      type: mongoose.Types.ObjectId,
      ref: "students",
    },
  ],
  Teachers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "teachers",
    },
  ],
});

const Class = mongoose.model("class", ClassSchema);

module.exports = Class;
