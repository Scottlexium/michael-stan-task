// express server
const express = require('express');
const Router = express.Router();
const router = require('./routes/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// dotenv for environment variables
require('dotenv').config();

const port = 3020;
// listen for requests
// connect monogoose


app.listen(port, () => {
    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('connected to mongoose');
        console.log(`Listening on http://localhost:${port}`)
    });
});
// serve static files from the public directory
app.use(express.static('public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
// use the routes
app.use(router);
