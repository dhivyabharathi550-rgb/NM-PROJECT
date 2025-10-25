const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

// When a user connects
io.on("connection", (socket) => {
  console.log("A user connected");

  // When a message is sent
  socket.on("chatMessage", (msg) => {
    io.emit("chatMessage", msg); // Send to everyone
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
