import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Sistema de Gestión de Tareas',
      version: '1.0.0',
      description: 'API RESTful desarrollada con Node.js, Express, TypeScript y MongoDB para la prueba técnica de Instaleap.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo local',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Ingresa tu token JWT en el formato: Bearer <token>',
        },
      },
    },
  },
  apis: [
    path.join(process.cwd(), 'src/api/*.ts'),
    './src/api/*.ts'
  ],
};

export const swaggerSpec = swaggerJsdoc(options);