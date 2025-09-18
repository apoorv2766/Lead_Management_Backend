const mongoose = require("mongoose");
const newSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    status: {
      type: String,
    },
    alternatePhone: { type: String, unique: true },
    alternateEmail: { type: String, unique: true },
    qualification: { type: String },
    interestField: { type: String },
    source: { type: String },
    assignedTo: { type: String },
    jobInterest: { type: String },
    state: { type: String },
    city: { type: String },
    passoutYear: { type: Number },
    heardFrom: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", newSchema);
