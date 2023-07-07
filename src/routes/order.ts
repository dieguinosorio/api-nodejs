import { Router } from 'express'
import { getItems } from '../controllers/order';
import { checkJWt } from '../middlewares/session';

const router = Router()

router.get('/',checkJWt, getItems);

export { router }