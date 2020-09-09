import { Router } from 'express';
import photoController from '../controller/photoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, photoController.store);

export default router;
