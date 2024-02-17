import Todo from "../model/TodoModel.js";

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed || false,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });

    if (req.body.title) todo.title = req.body.title;
    if (req.body.description) todo.description = req.body.description;
    if (req.body.completed !== undefined) todo.completed = req.body.completed;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });

    await todo.deleteOne();
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
