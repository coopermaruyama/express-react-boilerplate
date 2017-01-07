import express from 'express';
import mongoose from 'mongoose';

/**
 * Initialize the database.
 */
mongoose.connect('mongodb://mongo:27017');

/**
 * Initialize the application.
 */
const app = express();

/**
 * Serve files in the /public directory as static files.
 */
app.use(express.static('public'));

/**
 * SPA
 */
app.get('*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

/**
 * Run the server
 */
app.listen(3000, () => console.log('App listening on port 30s00!'));
