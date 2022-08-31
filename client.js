const net = require("net");

const port = 50541;
const host = '10.0.2.15'
const clientName = 'RJS';

const m = {
  up: 'Move: up',
  down: 'Move: down',
  left: 'Move: left',
  right: 'Move: right',
}



// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host,
    port
  });

  const moveSnakeInterval = (direction, delay) => {
    setInterval(() => {
      conn.write(`${m[direction]}`)
    }, delay);
  }

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);

    // set client's name on server
    conn.write(`Name: ${clientName}`);
    moveSnakeInterval('up',500)
  });

  conn.on("data", (message) => {
    console.log(`Message: ${message}`);
  });

  return conn;
};

module.exports = {
  connect,
}