import { TaskModel } from '../persistence/task.model.js';
import { NotFoundError } from '../utils/errors.js';

export class TaskService {
  static async createTask(userId: string, data: { titulo: string; descripcion: string; fecha_vencimiento: string; estado?: 'pendiente' | 'en curso' | 'completada' }) {
    const task = new TaskModel({
      ...data,
      usuario_id: userId,
    });
    await task.save();
    return task;
  }

  static async getTasks(userId: string) {
    return await TaskModel.find({ usuario_id: userId });
  }

  static async getTaskById(userId: string, taskId: string) {
    const task = await TaskModel.findOne({ _id: taskId, usuario_id: userId });
    if (!task) {
      throw new NotFoundError('Tarea no encontrada o no pertenece al usuario');
    }
    return task;
  }

  static async updateTask(userId: string, taskId: string, data: any) {
    const task = await TaskModel.findOneAndUpdate(
      { _id: taskId, usuario_id: userId },
      data,
      { new: true, runValidators: true }
    );
    if (!task) {
      throw new NotFoundError('Tarea no encontrada para actualizar');
    }
    return task;
  }

  static async deleteTask(userId: string, taskId: string) {
    const task = await TaskModel.findOneAndDelete({ _id: taskId, usuario_id: userId });
    if (!task) {
      throw new NotFoundError('Tarea no encontrada para eliminar');
    }
    return { message: 'Tarea eliminada exitosamente' };
  }
}