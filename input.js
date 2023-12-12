let connection; 

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleKeyPress = (key) => { 

    if (key === "w") {
      stdin.write("Move: up");
    }
    if (key === "a") {
      stdin.write("Move: left");
    }
    if (key === "s") {
      stdin.write("Move: down");
    }
    if (key === "d") {
      stdin.write("Move: right");
    }
  };

  const handleUserInput = function (data) {
    if (data === '\u0003') {
      process.exit();
    }
  }

  
  stdin.on("data", handleUserInput);
  stdin.on("data", handleKeyPress); 

  return stdin;
};

module.exports = { setupInput };