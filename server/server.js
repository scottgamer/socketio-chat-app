const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New connection");

  socket.on("disconnect", () => {
    console.log("User left");
  });
});

app.use(router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
