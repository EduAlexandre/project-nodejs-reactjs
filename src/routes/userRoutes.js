import { Router } from 'express';
import userController from '../controller/UserController';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.patch('/:id', userController.isActive);
router.post('/', userController.store);

export default router;
