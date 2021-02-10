let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  })
  return stdin;
}

module.exports = {setupInput};