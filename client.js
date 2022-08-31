const net = require("net");

const { IP, PORT, INITIALS } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);

    // set client's name on server
    conn.write(`Name: ${INITIALS}`);
  });

  conn.on("data", (message) => {
    console.log(`Message: ${message}`);
  });

  return conn;
};

module.exports = {
  connect,
};
