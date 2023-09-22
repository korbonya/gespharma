import express from 'express';
import { createCategory, deleteCategory, getAllCategories, updateCategory } from '../controllers/category.js';

const router = express.Router()

router.post('/', createCategory);
router.get('/', getAllCategories);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router