import { Router } from 'express';
import userController from '../controller/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.patch('/', loginRequired, userController.isActive);

export default router;
