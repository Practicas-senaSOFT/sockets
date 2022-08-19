const express = require("express");
const app = express();
const port = 3001;
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log("user Connected", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });

  socket.on("joinRoom", (userName, room, roomName , users,  callback) => {
    console.log(`user ${userName} joined room ${roomName} and count users ${users} : roomID ${room}`);
    callback({
      status: "success"
    });
  });

  socket.on("message", (data) => {
    console.log(data);
    socket.to(data.room).emit("devolucion",data );
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
