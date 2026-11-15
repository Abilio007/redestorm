const { io } = require("socket.io-client");

const socket = io("http://localhost:8080");

socket.on("connect", () => {
  console.log(`Connecetd to REDSTORM: `, socket.id);
});

socket.on("storm:update", (storm) => {
  console.log(`Storm update: `, storm);
});

socket.on("disconnect", () => {
  console.log("Disconnected from REDSTORM: ", socket.id);
});
