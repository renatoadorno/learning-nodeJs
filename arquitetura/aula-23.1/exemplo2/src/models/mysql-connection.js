const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'model_database',
    password: 'admin',
    port: 3306
});

module.exports = connection;