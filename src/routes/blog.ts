import { Router } from 'express'
import { addItem, deleteItem, getItem, getItems, updateItem } from '../controllers/blog'

const router = Router()

router.get('/',getItems);

router.get('/:id',getItem);

router.post('/', addItem);

router.put('/',updateItem);

router.delete('/:id',deleteItem);

export { router }