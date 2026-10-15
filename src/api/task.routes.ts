import { Router } from 'express';
import { TaskController } from '../controllers/task.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Todas las rutas de tareas requieren token
router.use(verifyToken);

/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: Obtener todas las tareas del usuario autenticado
 *     tags:
 *       - Tareas
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida con éxito
 *   post:
 *     summary: Crear una nueva tarea
 *     tags:
 *       - Tareas
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: Terminar prueba técnica
 *               descripcion:
 *                 type: string
 *                 example: Enviar repositorio de Instaleap
 *               estado:
 *                 type: string
 *                 enum: [pendiente, en_progreso, completada]
 *                 example: pendiente
 *               fecha_vencimiento:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 */
router.post('/', TaskController.create);
router.get('/', TaskController.getAll);

/**
 * @openapi
 * /tasks/{id}:
 *   get:
 *     summary: Obtener una tarea por su ID
 *     tags:
 *       - Tareas
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea encontrada
 *       404:
 *         description: Tarea no encontrada
 *   put:
 *     summary: Actualizar una tarea por su ID
 *     tags:
 *       - Tareas
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               estado:
 *                 type: string
 *                 enum: [pendiente, en_progreso, completada]
 *               fecha_vencimiento:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente
 *   delete:
 *     summary: Eliminar una tarea por su ID
 *     tags:
 *       - Tareas
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente
 */
router.get('/:id', TaskController.getById);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.remove);

export default router;