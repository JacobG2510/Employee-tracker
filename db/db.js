const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'blast',
    user: 'JacobG2510',
    password: '2510',
    database: 'db.js'
});

module.exports = connection;