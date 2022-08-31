const net = require("net");

const port = 50541;
const clientName = 'RJS';

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);

    // set client's name on server
    conn.write(`Name: ${clientName}`);
  });

  conn.on("data", (message) => {
    console.log(`Message: ${message}`);
  });

  return conn;
};

module.exports = {
  connect,
}