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
    if (key === 'w') {
      conn.write('Move: up');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
    if (key === 'i') {
      conn.write('Say: Wtchit!');
    }
    if (key === 'j') {
      conn.write('Say: SsSs');
    }
    if (key === 'k') {
      conn.write('Say: Hey');
    }
    if (key === 'l') {
      conn.write('Say: lol');
    }
  })
  return stdin;
}

module.exports = {setupInput};