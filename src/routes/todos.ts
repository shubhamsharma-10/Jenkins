import { Router } from 'express';
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from '../controllers/todos.controller';

const router = Router();

router.get('/todos', getTodos);
router.get('/todo/:id', getTodoById);
router.post('/todo', createTodo);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

export default router;