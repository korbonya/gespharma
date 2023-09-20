import { createUser, login, updateUser, deleteUser } from "../controllers/auth.js";
import express from 'express';
const router = express.Router();

router.post('/signup', createUser);
router.post('/signin', login);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router