const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/index')
// Middlewares
const app = express()
const errorHandler = (err, req, res, next) => {
    res.status(500).send(`tienes un error en${err.message}`)
}
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/', router);
app.use(errorHandler)

module.exports = app;
