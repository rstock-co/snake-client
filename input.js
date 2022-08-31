// Stores the active TCP connection object.
let connection;
// console.log('upon declaration: ',connection)

const move = {
  up: "Move: up",
  down: "Move: down",
  left: "Move: left",
  right: "Move: right",
};

const handleUserInput = (data) => {
  // console.log('in user input: ',connection)
  if (data === "\u0003") {
    process.exit();
  }
  if (data === 'w') {
    connection.write(`${move.up}`)
  }
  if (data === 'a') {
    connection.write(`${move.left}`)
  }
  if (data === 's') {
    connection.write(`${move.down}`)
  }
  if (data === 'd') {
    connection.write(`${move.right}`)
  }
  if (data === 'p') {
    connection.write(`Say: I love Python!`)
  }
  if (data === 'h') {
    connection.write(`Say: Hisssssterical`)
  }
  if (data === 'y') {
    connection.write(`Say: Yo yo yo!`)
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