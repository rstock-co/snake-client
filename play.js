const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('connecting...');
const connection = connect();

setupInput(connection);