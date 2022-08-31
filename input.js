// Stores the active TCP connection object.
let connection;
// console.log('upon declaration: ',connection)

const { UP, DOWN, RIGHT, LEFT, MESSAGES } = require('./constants');

const handleUserInput = (data) => {
  // console.log('in user input: ',connection)
  if (data === "\u0003") {
    process.exit();
  }
  if (data === 'w') {
    connection.write(UP);
  }
  if (data === 'a') {
    connection.write(LEFT);
  }
  if (data === 's') {
    connection.write(DOWN);
  }
  if (data === 'd') {
    connection.write(RIGHT);
  }
  if (data === 'p') {
    connection.write(MESSAGES.p);
  }
  if (data === 'h') {
    connection.write(MESSAGES.h);
  }
  if (data === 'y') {
    connection.write(MESSAGES.y);
  }
};

const setupInput = (conn) => {
  connection = conn;
  // console.log('after assignment: ',connection)
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
};