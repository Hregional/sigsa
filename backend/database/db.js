//databse db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

// Configuración de la conexión a la base de datos usando variables de entorno
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


// Prueba la conexión
(async () => {
  try {
    await pool.getConnection();
    console.log('¡Conexión exitosa a la base de datos MariaDB!');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
})();

module.exports = pool;
