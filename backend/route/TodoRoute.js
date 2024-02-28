import express from 'express';

import {createTodo, getAllTodos,deleteTodo, updateTodo, } from '../controllers/TodoController.js';

const router = express.Router();

// api/todo
router.get('/', getAllTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

export default router;



