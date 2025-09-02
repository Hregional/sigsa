// Importa el módulo de Express
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./database/db'); // Importa la configuración de la base de datos
require('dotenv').config();

const PORT = process.env.PORT || 3001;

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

// Nuevo endpoint para obtener datos de la base de datos
app.get('/api/users', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error('Error al obtener los datos:', err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
