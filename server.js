const express = require('express');
const mongoose = require('mongoose');

/**
 * Initialize the database.
 */
mongoose.connect('mongodb://mongo:27017');

/**
 * Initialize the application.
 */
const app = express();

app.get('/', (req, res) => res.send('Hello World'));

app.listen(3000, () => console.log('App listening on port 3000!'));
