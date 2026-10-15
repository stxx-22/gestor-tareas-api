# Sistema de Gestión de Tareas - Backend API

API RESTful desarrollada con Node.js, Express, TypeScript y MongoDB para la prueba técnica

## Arquitectura
El proyecto está estructurado en capas para garantizar una clara separación de responsabilidades:
* `src/api`: Definición de rutas y vinculación de middlewares[cite: 1].
* `src/controllers`: Lógica de control para manejar las peticiones y respuestas HTTP[cite: 1].
* `src/services`: Lógica de negocio y reglas de la aplicación[cite: 1].
* `src/persistence`: Modelos de base de datos (Mongoose) y conexión[cite: 1].
* `src/config`: Configuración centralizada mediante patrón Singleton[cite: 1, 2].

## Instalación y Ejecución Local

### 1. Clonar el repositorio y entrar al directorio
```bash
git clone https://github.com/stxx-22/gestor-tareas-api.git
cd gestor-tareas-api