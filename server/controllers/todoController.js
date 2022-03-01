const Todo = require("../models/todoModel");

// @desc    Get todos
// @route   GET /api/todos
// @access  Private
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

// @desc    Add todos
// @route   POST /api/todos
// @access  Private
const addTodos = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      res.status(400);
      throw new Error("Please add text");
    }

    const todo = await Todo.create({ text });
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update todo text
// @route   PUT /api/todos/:id
// @access  Private
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      res.status(400);
      throw new Error("Todo not found");
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update todo to completed
// @route   PATCH /api/todos/:id
// @access  Private
const completeTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      res.status(400);
      throw new Error("Todo not found");
    }

    todo.completed = !todo.completed;
    todo.save();

    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete todo
// @route   DELETE /api/todos/:id
// @access  Private
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      res.status(400);
      throw new Error("Todo not found");
    }

    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getTodos, addTodos, updateTodo, completeTodo, deleteTodo };
