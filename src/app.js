const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index");
require("dotenv").config();
const { CLIENT_ID, DOMAIN, CLIENT_SECRET, BASE_URL } = process.env;
// Middlewares
const app = express();
// const { auth } = require("express-openid-connect");

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   baseURL: BASE_URL,
//   clientID: CLIENT_ID,
//   issuerBaseURL: DOMAIN,
//   secret: CLIENT_SECRET,
// };
// app.use(auth(config));

const errorHandler = (err, req, res, next) => {
  res.status(500).send(`tienes un error en${err.message}`);
};

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", router);
app.use(errorHandler);

module.exports = app;
