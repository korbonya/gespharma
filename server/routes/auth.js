import { createUser, login } from "../controllers/auth.js";
import { protect } from "../middlewares/protect.js";
import express from 'express';
const router = express.Router();

router.post('/signup',protect, createUser);
router.post('/signin', login);

export default router