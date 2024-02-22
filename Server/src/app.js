const express = require("express");
const router = require("./routes/index");
const server = express();

server.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-control-Allow-credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/rickandmorty", router);

module.exports = server;
