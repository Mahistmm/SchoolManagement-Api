const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      default: 0,
    },
    contact: {
      type: Number,
      required: true,
    },
    classroom: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const teachers = mongoose.model("teachers", TeacherSchema);

module.exports = teachers;
