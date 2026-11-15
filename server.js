require("dotenv").config();
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const { engine } = require("./src/stormInstance");

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`Client connecetd: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Cliente disconnected: ${socket.id}`);
  });
});

setInterval(() => {
  const updateStorm = engine.update(1);

  io.emit("storm:update", updateStorm);
}, 1000);

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./src/config/initdb");

const stormRoute = require("./src/routes/stormRoutes");

app.use(stormRoute);

server.listen(PORT, HOST, () => {
  console.log("REDSTORM simulator is running...");
});
