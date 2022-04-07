require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB_NAME,
  dialect
});

module.exports = connection;
