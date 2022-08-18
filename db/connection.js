const mysql = require('mysql2');
const credentials = require('./../config.js');

// Connect to database
const db = mysql.createConnection(
    {
        'host': 'localhost',
        // Your MySQL username,
        'user': 'root',
        // Your MySQL password
        'password': credentials.mySQLpassword,
        'database': 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;