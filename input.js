let connection; 

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (input) {
    input = input.toLowerCase();

    if (input === '\u0003') {
      process.exit();
    }
    if (input === "w") {
      conn.write("Move: up");
    }
    if (input === "a") {
      conn.write("Move: left");
    }
    if (input === "s") {
      conn.write("Move: down");
    }
    if (input === "d") {
      conn.write("Move: right");
    }
    if (input === "x") {
      conn.write("Say: I see you!");
    }
  };

  stdin.on("data", handleUserInput);
   
  return stdin;
};

module.exports = { setupInput }