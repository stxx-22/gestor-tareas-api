import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { env } from './config/env.config.js';
import { connectDB } from './persistence/database.js';
import authRoutes from './api/auth.routes.js';
import taskRoutes from './api/task.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { swaggerSpec } from './config/swagger.js';

const app = express();

app.use(cors());
app.use(express.json());

// Conectar Base de Datos
connectDB();

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de la API
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

// Ruta de comprobación de estado
app.get('/', (req, res) => {
  res.json({ status: 'API Funcionando Correctamente 🚀', docs: 'http://localhost:3000/api-docs' });
});

// Middleware Centralizado de Errores
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`🚀 Servidor ejecutándose en el puerto http://localhost:${env.PORT}`);
  console.log(`📄 Documentación Swagger disponible en http://localhost:${env.PORT}/api-docs`);
});