const net = require("net");

const port = 50541;
const host = "10.0.2.15";
const clientName = "RJS";

const move = {
  up: "Move: up",
  down: "Move: down",
  left: "Move: left",
  right: "Move: right",
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => {
    if (data === "\u0003") {
      process.exit();
    }
  });
  return stdin;
};

setupInput();

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host,
    port,
  });

  const moveSnakeOnInterval = (direction, delay) => {
    setInterval(() => {
      conn.write(`${move[direction]}`);
    }, delay);
  };

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);

    // set client's name on server
    conn.write(`Name: ${clientName}`);
    moveSnakeOnInterval("up", 500);
  });

  conn.on("data", (message) => {
    console.log(`Message: ${message}`);
  });

  return conn;
};

module.exports = {
  connect,
};
