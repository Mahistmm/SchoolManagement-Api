const mongoose = require("mongoose");

const StudentsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Enrollment_Date: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    classroom: {
      type: mongoose.Types.ObjectId,
      ref: "class",
      required: true,
    },
    teachers: {
      type: mongoose.Types.ObjectId,
      ref: "teachers",
      required: true,
    },
  },
  { timestamps: true }
);

const students = mongoose.model("students", StudentsSchema);

module.exports = students;
