import { Router } from 'express'
import multerMiddleware from '../middlewares/file';
import { getFile } from '../controllers/upload';
import { checkJWt } from '../middlewares/session';
const router = Router()

router.post('/',checkJWt, multerMiddleware.single("myfile"), getFile);

export { router }