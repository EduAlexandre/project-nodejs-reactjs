import { Router } from 'express';
import thiefController from '../controller/ThiefController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/:id', thiefController.show);
router.get('/', thiefController.index);

router.post('/', loginRequired, thiefController.store);
router.put('/:id', loginRequired, thiefController.update);

export default router;
