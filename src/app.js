const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index");

require("dotenv").config();
// Middlewares
const app = express(); 


const errorHandler = (err, req, res, next) => {
  res.status(500).send(`tienes un error en${err.message}`);
};

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use("/", router);
app.use(errorHandler);

module.exports = app;
