*(Este es un requisito obligatorio de la prueba para evaluar el criterio con la inteligencia artificial[cite: 3]):*
```markdown
# Bitácora de Desarrollo

## 🤖 Uso de Herramientas de IA
* **Prompt utilizado:** Ayuda para estructurar una API en capas con Node.js, Express, TypeScript y patrón Singleton.
* **Qué se aceptó:** La separación de capas (api, controllers, services, persistence) y las clases de error personalizadas por su limpieza y orden.
* **Qué se modificó:** Se ajustó el tipado estricto en los parámetros de ruta (`req.params.id` en Express) para evitar conflictos de TypeScript.
* **Verificación:** Pruebas manuales en el servidor para asegurar que los errores devuelvan respuestas JSON correctas y que la autenticación con JWT funcione.

## 🧠 Decisiones sin IA
1. Uso de MongoDB con Mongoose para agilizar el modelado de relaciones entre usuarios y tareas.
2. Uso de `swagger-jsdoc` integrado en las rutas para mantener la documentación sincronizada automáticamente.