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
  Todo.findByIdAndUpdate(req.params.id, { text: req.body.text })
    .then(() => res.json({ success: true }))
    .catch((err) => console.log(err));
};

// export const deleteTodo = async (req, res) => {
//   await Todo.findByIdAndDelete(req.params.id)
//     .then(() => res.json({ success: true }))
//     .catch((err) => console.log(err));
// };

export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


// const _id = new ObjectId(req.params.id);

// const deletedTodo = await Todo.deleteOne({ _id });
