const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodos,
  updateTodo,
  deleteTodo,
  completeTodo,
} = require("../controllers/todoController");

router.route("/").get(getTodos).post(addTodos);
router.route("/:id").put(updateTodo).patch(completeTodo).delete(deleteTodo);

module.exports = router;
