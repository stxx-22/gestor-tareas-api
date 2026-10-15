import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  nombre: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
});

export const UserModel = model<IUser>('User', userSchema);