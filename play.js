#!/usr/bin/env node
const { connect } = require("./client");

console.log("Connecting ...");
connect();



const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (data) {
    if (data === '\u0003') {
      process.exit();
    }
  }

  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput();


process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

// Begin game
  game.start()
