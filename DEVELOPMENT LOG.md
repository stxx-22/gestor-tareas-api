# Bitácora de Desarrollo

##  Uso Limitado de Asistentes de IA
La herramienta de inteligencia artificial se utilizó de manera muy puntual y selectiva solo para consultas rápidas de configuración inicial, sin intervenir en la lógica principal ni en el desarrollo general del proyecto.

* **Uso puntual:** Consulta de referencia para estructurar la base del patrón Singleton en la configuración de variables de entorno con TypeScript.
* **Qué se aceptó y por qué:** La distribución inicial de la arquitectura en capas (`api`, `controllers`, `services`, `persistence`) por su clara separación de responsabilidades.
* **Qué se rechazó o modificó:** Se adaptó y reescribió el manejo del tipado estricto en los parámetros de ruta (`req.params.id`) y el sistema de excepciones personalizadas para garantizar la seguridad de tipos en TypeScript.
* **Verificación:** Pruebas manuales directas sobre el servidor local para comprobar el comportamiento correcto de los endpoints, las respuestas JSON y los códigos de estado HTTP.

##  Decisiones Principales (Sin Asistencia de IA)
1. **Gestión de Base de Datos:** Se seleccionó MongoDB con Mongoose para modelar las colecciones de usuarios y tareas mediante referencias directas (`usuario_id`), garantizando que cada usuario gestione exclusivamente su propia información.
2. **Estrategia de Documentación:** Se implementó `swagger-jsdoc` directamente en las rutas para mantener una documentación técnica limpia, estructurada y automatizada sin archivos externos redundantes.