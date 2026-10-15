import { Schema, model, Document, Types } from 'mongoose';

export interface ITask extends Document {
  titulo: string;
  descripcion: string;
  fecha_vencimiento: Date;
  estado: 'pendiente' | 'en curso' | 'completada';
  usuario_id: Types.ObjectId;
}

const taskSchema = new Schema<ITask>({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  fecha_vencimiento: { type: Date, required: true },
  estado: { type: String, enum: ['pendiente', 'en curso', 'completada'], default: 'pendiente' },
  usuario_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const TaskModel = model<ITask>('Task', taskSchema);