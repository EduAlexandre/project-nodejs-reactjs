import { Router } from 'express';
import thiefController from '../controller/ThiefController';

const router = new Router();

router.get('/:id', thiefController.show);
router.get('/', thiefController.index);
router.post('/', thiefController.store);
router.put('/:id', thiefController.update);

export default router;
