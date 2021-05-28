import express from 'express';
import auth from '../middleware/auth.js';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/task.controller.js';
const router = express.Router();
// localhost:5000/tasks
router.get('/', auth, getTasks);
router.post('/', auth, createTask);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);
export default router;