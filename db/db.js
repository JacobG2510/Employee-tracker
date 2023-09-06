const mysql = require('mysql2');

const dbConfig = {
    host: 'blast',
    user: 'JacobG2510',
    password: '2510',
    database: 'root',
};

const pool = mysql.createPool(dbConfig);

module.exports = pool.promise();