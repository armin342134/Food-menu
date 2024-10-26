const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  cookingtime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("food", schema);
