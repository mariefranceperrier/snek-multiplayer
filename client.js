const net = require("net");

  const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: MFP");
  });
  
  // conn.on("say", () => {
  //   let message = "I am the snakiest snake of all the snakes!"
  //   console.log(`Say: ${message}`);
  // });

  conn.on("data", (data) => {
    console.log("Received data from server: ", data);
  });

  return conn;
};

module.exports = { connect };