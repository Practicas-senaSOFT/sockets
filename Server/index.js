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

  socket.on("createRoom", (data, callback) => {
    callback({
      status: "Room Created successfully",
    });
    console.log(data);
  });

  socket.on("joinRoom", (data, callback) => {
    console.log(
      `user ${data.userName} joined room ${data.roomName} and count users ${data.users} : roomID ${data.room}`
    );
    callback({
      status: "success",
    });
    socket.join(data.room);
  });

  socket.on("sendMessage", (data) => {
    console.log(data);
    
    socket.to(data.room).emit("received", data);
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
