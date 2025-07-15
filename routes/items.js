import express from 'express';
import { getItems, createItem, updateItem, deleteItem, searchItem } from '../controllers/itemsController.js';


const router = express.Router();

router.get('/', getItems);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);
router.get('/search', searchItem);

export default router;
