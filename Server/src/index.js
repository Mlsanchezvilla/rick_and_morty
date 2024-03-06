const app = require("./app");
const PORT = 3001;
const server = app.listen;
const { conn } = require("../DB_connection");

conn.sync({ force: true }).then(() => {
  server(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});
