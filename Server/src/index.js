const express = require("express");
const router = require("./routes/index");
const server = express();
const PORT = 3001;

server.use((req, res, next) => {
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

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

// let http = require("http");
// const PORT = 3001;
// const getCharById = require ("./controllers/getCharById");

// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   let url = req.url;
//   console.log(url);

//   if (url.includes("/rickandmorty/character")) {
//     let id = url.split("/").pop();
//     getCharById(res, id);
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not found");
//   }
// });

// server.listen(PORT);
