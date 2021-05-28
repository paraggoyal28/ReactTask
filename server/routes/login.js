import express from 'express';
// import auth from '../middleware/auth.js';
import { login } from '../controllers/user.controller.js';
const router = express.Router();
// localhost:5000/login
router.post('/', login);

export default router;