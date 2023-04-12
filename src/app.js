const express = require('express');
const morgan = require('morgan');
// Middlewares
const app = express()
app.use(express.json());
app.use(morgan('dev'));

module.exports = app;
