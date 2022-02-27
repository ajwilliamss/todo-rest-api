const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
