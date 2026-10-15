import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middlewares/auth.middleware.js';
import { TaskService } from '../services/task.service.js';

export class TaskController {
  static async create(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const task = await TaskService.createTask(req.user!.id, req.body);
      res.status(201).json({ status: 'success', data: task });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const tasks = await TaskService.getTasks(req.user!.id);
      res.status(200).json({ status: 'success', data: tasks });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const taskId = req.params.id as string;
      const task = await TaskService.getTaskById(req.user!.id, taskId);
      res.status(200).json({ status: 'success', data: task });
    } catch (error) {
      next(error);
    }
  }

  static async update(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const taskId = req.params.id as string;
      const task = await TaskService.updateTask(req.user!.id, taskId, req.body);
      res.status(200).json({ status: 'success', data: task });
    } catch (error) {
      next(error);
    }
  }

  static async remove(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const taskId = req.params.id as string;
      const result = await TaskService.deleteTask(req.user!.id, taskId);
      res.status(200).json({ status: 'success', data: result });
    } catch (error) {
      next(error);
    }
  }
}