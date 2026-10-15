import { Router } from 'express';
import { TaskController } from '../controllers/task.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Todas las rutas de tareas requieren token
router.use(verifyToken);

router.post('/', TaskController.create);
router.get('/', TaskController.getAll);
router.get('/:id', TaskController.getById);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.remove);

export default router;