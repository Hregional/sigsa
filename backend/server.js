// Importa el módulo de Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

// Middleware para que el servidor pueda procesar JSON en las peticiones
app.use(express.json());
app.use(cors());

// Ruta principal (Endpoint)
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde mi backend con Node.js!');
});

// Ejemplo de una ruta con datos JSON
app.get('/api/saludo', (req, res) => {
  res.json({
    mensaje: '¡Hola! Este es un endpoint de API.',
    fecha: new Date().toISOString()
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
