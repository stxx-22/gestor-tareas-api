import mongoose from 'mongoose';
import { env } from '../config/env.config.js';

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log('✅ Base de datos conectada exitosamente a MongoDB');
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
    process.exit(1);
  }
};