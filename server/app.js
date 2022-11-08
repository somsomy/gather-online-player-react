const path = require('path');
// const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();
global.WebSocket = require('isomorphic-ws');
const { Game } = require('@gathertown/gather-game-client');

const API_KEY = process.env.REACT_APP_GATHER_API_KEY;
const SPACE_ID = process.env.REACT_APP_GATHER_SPACE_ID;

const app = express();
// const whiteList = ['http://localhost:3000', 'https://gather-online-player.herokuapp.com'];
// const corsOptions = {
//   origin: function (origin, callBack) {
//     if (whiteList.indexOf(origin) !== -1) {
//       callBack(null, true);
//     } else {
//       callBack(new Error('Not Allowed Origin'));
//     }
//   }
// };

// app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '../build')));

// gather
const game = new Game(SPACE_ID, () => Promise.resolve({ apiKey: API_KEY }));
game.connect(SPACE_ID);
game.subscribeToConnection((connected) => console.log('connected?', connected));
game.subscribeToEvent('playerJoins', (player) => {
  console.log(Object.keys(game.players).length);
});

// api
app.get('/count', (req, res) => {
  res.json({ count: Object.keys(game.players).length });
});

app.get('/players', (req, res) => {
  const players = Object.values(game.players).map((player) => player.name);
  res.json(players);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(process.env.PORT || process.env.API_PORT, () => console.log('Server is running...'));
