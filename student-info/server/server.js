const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const studentRouter = require('./routes/student');
const cors = require('cors');

server.listen(9002, error => {
    if (error) {
        console.log('Error loading the server');
    } else {
        console.log('Started the server');
    }
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

server.use('/api/student', studentRouter);
