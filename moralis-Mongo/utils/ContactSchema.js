const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    userAddress: {
      type: String,
    },
    email: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
  },
  { timestamps: true }
);

let contacts =
  mongoose.models.contacts || mongoose.model("contacts", contactSchema);

module.exports = { contacts };
