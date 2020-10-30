const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    // user: 'jgreazel',
    // password: 'ab91c2e7f776bd1a',
    database: 'g23'
});

connection.connect();

module.exports = connection;