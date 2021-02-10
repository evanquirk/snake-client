const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
    conn.on('connect', () => {
      console.log('connected to the server');
    })
  conn.on('data', function(message) {
    console.log('new message from server', message)
  })
  return conn;
};

module.exports = {connect};