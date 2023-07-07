import { Router } from 'express'
import { addItem, deleteItem, getItem, getItems, updateItem } from '../controllers/item'
import { logMiddleware } from '../middlewares/log';

const router = Router()

router.get('/',logMiddleware,getItems);

router.get('/:id',getItem);

router.post('/', addItem);

router.put('/:id',updateItem);

router.delete('/:id',deleteItem);

export { router }