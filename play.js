const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (message) => {
    console.log(`Message: ${message}`);
  });

  return conn;
};

console.log('connecting...')
connect();
