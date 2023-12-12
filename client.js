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

  // conn.on("data", () => {
  //   conn.write("Move: up");

    // setTimeout(() => {
    // conn.write("Move: up");
    // }, 50);

    // setTimeout(() => {
    // conn.write("Move: up");
    // }, 100);

    // setTimeout(() => {
    // conn.write("Move: up");
    // }, 150);

  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 50);
  
// });

  conn.on("data", (data) => {
    console.log("Received data from server: ", data);
  });
  return conn;
};

module.exports = { connect };