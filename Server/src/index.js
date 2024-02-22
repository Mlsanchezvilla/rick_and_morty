const app = require('./app');
const PORT = 3001;
const server = app.listen;


server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});