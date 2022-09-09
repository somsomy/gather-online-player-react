const path = require('path');
const dotenv = require("dotenv");
const express = require('express');

dotenv.config();
global.WebSocket = require("isomorphic-ws");
const { Game } = require('@gathertown/gather-game-client');

const app = express();

const API_KEY = process.env.GATHER_API_KEY;
const SPACE_ID = process.env.GATHER_SPACE_ID;

const game = new Game(SPACE_ID, () => Promise.resolve({ apiKey: API_KEY }));
// this is the line that actually connects to the server and starts initializing stuff
game.connect(SPACE_ID);
// optional but helpful callback to track when the connection status changes
game.subscribeToConnection((connected) => console.log("connected?", connected));
game.subscribeToEvent("playerJoins", (player) => {
  console.log(Object.keys(game.players).length);
});

app.use(express.static(path.join(__dirname, '../build')));

app.get("/count", (req, res) => { res.json({ count: Object.keys(game.players).length})});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(process.env.PORT || 8000,
  () => console.log("Server is running..."));