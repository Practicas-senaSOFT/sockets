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
  socket.on("disconnect", () => {
  });

  socket.on("createRoom", (data, callback) => {
    callback({
      status: "Room Created successfully",
    });
  });

  socket.on("joinRoom", (data, callback) => {
    callback({
      status: "success",
    });
    socket.join(data.room);
  });

  socket.on("sendMessage", (data ) => {
    socket.to(data.room).emit("received" , data);
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
