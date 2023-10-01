const mysql = require('mysql');

// Establish the database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbsmschool',
});

db.connect(error => {
    if (error) {
        console.log('Error connecting to the database');
    } else {
        console.log('Successfully connected to the database');
    }
});

module.exports = db;
