import dotenv from 'dotenv';
dotenv.config();

class EnvConfig {
  private static instance: EnvConfig;
  public readonly PORT: number;
  public readonly MONGODB_URI: string;
  public readonly JWT_SECRET: string;

  private constructor() {
    this.PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    this.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gestor-tareas';
    this.JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

    if (!process.env.MONGODB_URI) {
      console.warn('Advertencia: MONGODB_URI no está definido en el archivo .env');
    }
  }

  public static getInstance(): EnvConfig {
    if (!EnvConfig.instance) {
      EnvConfig.instance = new EnvConfig();
    }
    return EnvConfig.instance;
  }
}

export const env = EnvConfig.getInstance();