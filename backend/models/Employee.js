const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    department: { type: String },
    contact: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
